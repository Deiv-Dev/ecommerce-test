<?php
/*
Plugin Name: Woocomerce Order Table Creator
Description: Table to add orders to woocomerce
Version: 1.2
Author: Bellatoscana
*/

// Add a custom menu item to the admin menu
function custom_admin_menu()
{
    add_menu_page(
        'Add Order',
        'Add Order',
        'manage_options',
        'add-order',
        'display_order_page_content'
    );
}
add_action('admin_menu', 'custom_admin_menu');

function display_order_page_content()
{
    echo '<div class="wrap">';
    echo '<h2>Product List</h2>';

    if (isset($_POST['submit_order'])) {
        process_order();
    }

    $location_terms = get_terms([
        'taxonomy'   => 'pa_atsiemimo-vieta',
        'hide_empty' => false,
    ]);
    // Initialize variables to store unique pickup locations and size-location-price mapping
    $all_locations = [];
    foreach ($location_terms as $term) {
        $all_locations[$term->slug] = $term->name;
    }
    $size_location_price = [];
    $args = array(
        'post_type' => 'product',
        'posts_per_page' => -1
    );
    $products = new WP_Query($args);

    $product_data = [];
    if ($products->have_posts()) {
        while ($products->have_posts()) {
            $products->the_post();
            $product = wc_get_product(get_the_ID());
            $product_data[] = $product; // Store product objects for later use
            if ($product->is_type('variable')) {
                $variations = $product->get_available_variations();
                foreach ($variations as $variation) {
                    $variation_obj = wc_get_product($variation['variation_id']);
                    $size = $variation['attributes']['attribute_pa_dydziai'] ?? '';
                    $location = $variation['attributes']['attribute_pa_atsiemimo-vieta'] ?? '';
                    $price = $variation_obj->get_price();
                    $size_location_price[get_the_ID()][$size][$location] = $price;

                    if (!in_array($location, $all_locations, true)) {
                        $all_locations[] = $location;
                    }
                }
            }
        }
    }
    wp_reset_postdata();

    // Form for product and attributes selection
    echo '<form action="" method="post">';
    echo '<div>';
    echo '<input type="text" name="customer_name" placeholder="Name" required>';
    echo '<input type="email" name="customer_email" placeholder="Email" required>';
    echo '<input type="text" name="customer_phone" placeholder="Phone Number" required>';
    echo '<select id="selected_location" name="selected_location" required>';
    foreach ($all_locations as $location_slug => $location_name) {
        echo '<option value="' . $location_slug . '">' . $location_name . '</option>';
    }
    echo '</select>';
    echo '</div>';

    // Displaying products and their attributes in a table
    echo '<table class="wp-list-table widefat fixed striped" id="product_table">';
    echo '<thead><tr><th>ID</th><th>Image</th><th>Name</th><th>Price</th><th>Sum</th><th>Category</th><th>Sizes</th><th>Quantity</th></tr></thead>';
    echo '<tbody>';
    foreach ($product_data as $product) {
        echo '<tr data-product-id="' . $product->get_id() . '">';
        echo '<td>' . $product->get_id() . '</td>';
        echo '<td>' . (has_post_thumbnail($product->get_id()) ? get_the_post_thumbnail($product->get_id(), array(50, 50)) : 'No Image') . '</td>';
        echo '<td>' . $product->get_name() . '</td>';
        echo '<td class="product-base-price">Select options</td>'; // Base price cell
        echo '<td class="product-total-price">-</td>'; // Total price cell, initialized to '-' or '0'
        echo '<td>' . implode(', ', wp_get_post_terms($product->get_id(), 'product_cat', ['fields' => 'names'])) . '</td>';
        echo '<td>';
        // Similar approach for sizes within the product loop
        if ($sizes = wp_get_post_terms($product->get_id(), 'pa_dydziai', ['fields' => 'all'])) {
            echo '<select class="product-size" name="size[' . $product->get_id() . ']">';
            foreach ($sizes as $size) {
                echo '<option value="' . $size->slug . '">' . $size->name . '</option>';
            }
            echo '</select>';
        }
        echo '</td>';
        echo '<td><input type="number" name="quantity[' . $product->get_id() . ']" min="0" value="0" style="width: 60px;"></td>';
        echo '</tr>';
    }
    echo '</tbody>';
    echo '<tfoot>';
    echo '<tr>';
    echo '<td colspan="6" style="text-align: right;">Total:</td>'; // Adjust colspan as needed to align correctly
    echo '<td id="total-quantity">0</td>'; // Cell for total quantity
    echo '<td id="total-price">0 €</td>'; // Cell for total price
    echo '</tr>';
    echo '</tfoot>';
    echo '</table>';
    echo '<br><button type="submit" name="submit_order" class="button-primary">Submit Order</button>';
    echo '</form>';
    echo '</div>';

    // At the end of your PHP script where you prepare the page content
    echo '<script type="text/javascript">
    var sizeLocationPrice = ' . json_encode($size_location_price) . ';
    </script>';

    echo '<script src="' . esc_url(plugins_url('dynamic-pricing.js', __FILE__)) . '"></script>';
}

// Function to find the variation ID based on selected attributes
function find_matching_variation_id($product, $size, $location)
{
    // Get the product variations
    $variations = $product->get_available_variations();

    foreach ($variations as $variation) {
        // Get the variation attributes
        $attributes = $variation['attributes'];

        // Check if the variation attributes match the selected attributes
        if ($attributes['attribute_pa_dydziai'] == $size && $attributes['attribute_pa_atsiemimo-vieta'] == $location) {
            return $variation['variation_id']; // Return the variation ID if attributes match
        }
    }

    return false; // Return false if no matching variation found
}

function process_order()
{
    $customer_name = sanitize_text_field($_POST['customer_name']);
    $customer_email = sanitize_email($_POST['customer_email']);
    $customer_phone = sanitize_text_field($_POST['customer_phone']);
    $selected_location = sanitize_text_field($_POST['selected_location']);

    // Create a new order
    $order = wc_create_order();

    // Set customer details
    $order->set_billing_first_name($customer_name);
    $order->set_billing_email($customer_email);
    $order->set_billing_phone($customer_phone);

    // Set shipping address
    $order->set_shipping_first_name($customer_name); // Assuming shipping address same as billing
    $order->set_shipping_phone($customer_phone);

    // Initialize order total
    $order_total = 0;

    // Add line items to the order
    foreach ($_POST['quantity'] as $product_id => $quantity) {
        if ($quantity > 0) { // Check if quantity is greater than 0
            $product = wc_get_product($product_id);
            $selected_attributes = $_POST['selected_attributes'][$product_id]; // Get selected attributes for the product
            $size = $selected_attributes['size']; // Get selected size
            $location = $selected_attributes['location']; // Get selected location

            // Find the variation ID based on the selected attributes
            $variation_id = find_matching_variation_id($product, $size, $location);

            if ($variation_id) {
                // Get the variation object
                $variation = new WC_Product_Variation($variation_id);

                // Get the variation price
                $variation_price = $variation->get_price();

                // Calculate the total price for the product based on the selected variation's price and quantity
                $product_total_price = $variation_price * $quantity;

                // Add line item to the order
                $item = new WC_Order_Item_Product();
                $item->set_variation_id($variation_id);
                $item->set_product($product);
                $item->set_quantity($quantity);
                $item->set_subtotal($product_total_price);
                $item->set_total($product_total_price);

                // Add item to the order
                $order->add_item($item);

                // Update order total
                $order_total += $product_total_price;
            }
        }
    }

    // Set order total
    $order->set_total($order_total);

    // Save the order
    $order->save();

    // Redirect back to the custom order page
    wp_redirect(admin_url('admin.php?page=add-order'));

    exit;
}
