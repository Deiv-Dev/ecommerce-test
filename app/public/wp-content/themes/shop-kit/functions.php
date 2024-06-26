<?php

/**
 * Shop Kit  functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Shop Kit 
 */
$shop_kit_theme = wp_get_theme();
$shop_kit_theme_version = $shop_kit_theme->get('Version');
$shop_kit_theme_domain = $shop_kit_theme->get('TextDomain');
if (!defined('SHOP_KIT_VERSION')) {
	// Replace the version number of the theme on each release.
	define('SHOP_KIT_VERSION', $shop_kit_theme_version);
}

if (!function_exists('shop_kit_setup')) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function shop_kit_setup()
	{
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Shop Kit , use a find and replace
		 * to change 'shop-kit' to the name of your theme in all the template files.
		 */
		load_theme_textdomain('shop-kit', get_template_directory() . '/languages');

		// Add default posts and comments RSS feed links to head.
		add_theme_support('automatic-feed-links');

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support('title-tag');

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support('post-thumbnails');

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'btop-menu' => esc_html__('Top Menu', 'shop-kit'),
				'main-menu' => esc_html__('Main Menu', 'shop-kit'),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);


		// Add support for Block Styles.
		add_theme_support('wp-block-styles');

		// Add support for full and wide align images.
		add_theme_support('align-wide');

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'shop_kit_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support('customize-selective-refresh-widgets');

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action('after_setup_theme', 'shop_kit_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function shop_kit_content_width()
{
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters('shop_kit_content_width', 1170);
}
add_action('after_setup_theme', 'shop_kit_content_width', 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function shop_kit_widgets_init()
{
	register_sidebar(
		array(
			'name'          => esc_html__('Sidebar', 'shop-kit'),
			'id'            => 'sidebar-1',
			'description'   => esc_html__('Add widgets here.', 'shop-kit'),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		)
	);
	register_sidebar(
		array(
			'name'          => esc_html__('Footer Widget', 'shop-kit'),
			'id'            => 'footer-widget',
			'description'   => esc_html__('Add Footer widgets here.', 'shop-kit'),
			'before_widget' => '<div class="col-lg-3"><div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div></div>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		)
	);
}
add_action('widgets_init', 'shop_kit_widgets_init');

function shop_kit_gb_block_style()
{

	wp_enqueue_style('shop-kit-gb-block', get_theme_file_uri('/assets/css/admin-block.css'), false, '1.0', 'all');
}
add_action('enqueue_block_assets', 'shop_kit_gb_block_style');



/**
 * Shop Kit Google fonts fuction
 */
if (!function_exists('shop_kit_fonts_url')) :
	function shop_kit_fonts_url()
	{
		$shop_kit_theme_fonts = get_theme_mod('shop_kit_theme_fonts', 'Montserrat');
		$shop_kit_theme_font_head = get_theme_mod('shop_kit_theme_font_head', 'Noto Serif');

		$fonts_url = '';

		$font_families = array();
		if ($shop_kit_theme_fonts == $shop_kit_theme_font_head) {
			$font_families[] = $shop_kit_theme_fonts . ':300,400,500,600,700,800';
		} else {
			$font_families[] = $shop_kit_theme_fonts . ':300,400,500,600,700,800';
			$font_families[] = $shop_kit_theme_font_head . ':300,400,500,600,700,800';
		}

		$query_args = array(
			'family' => urlencode(implode('|', $font_families)),
			'subset' => urlencode('latin,latin-ext'),
		);
		$fonts_url = add_query_arg($query_args, 'https://fonts.googleapis.com/css');

		return esc_url_raw($fonts_url);
	}
endif;

/**
 * Enqueue scripts and styles.
 */
function shop_kit_scripts()
{
	wp_enqueue_style('shop-kit-google-font', shop_kit_fonts_url(), array(), null);
	wp_enqueue_style('shop-kit-default', get_template_directory_uri() . '/assets/css/default.css', array(), SHOP_KIT_VERSION, 'all');
	wp_enqueue_style('bootstrap', get_template_directory_uri() . '/assets/css/bootstrap.min.css', array(), '5.2.0', 'all');
	wp_enqueue_style('font-awesome-five-all', get_template_directory_uri() . '/assets/css/all.css', array(), '5.14.0', 'all');
	wp_enqueue_style('shop-kit-block-style', get_template_directory_uri() . '/assets/css/block.css', array(), '1.0');
	wp_enqueue_style('shop-kit-main', get_template_directory_uri() . '/assets/css/main.css', array(), SHOP_KIT_VERSION, 'all');
	wp_enqueue_style('shop-kit-style', get_stylesheet_uri(), array(), SHOP_KIT_VERSION);

	wp_enqueue_script('jquery');
	wp_enqueue_script('bootstrap-bundle', get_template_directory_uri() . '/assets/js/bootstrap.bundle.js', array('jquery'), '5.2.0', true);
	wp_enqueue_script('shop-kit-mobile-menu', get_template_directory_uri() . '/assets/js/mobile-menu.js', array(), SHOP_KIT_VERSION, true);
	wp_enqueue_script('shop-kit-scripts', get_template_directory_uri() . '/assets/js/scripts.js', array(), SHOP_KIT_VERSION, true);

	if (is_singular() && comments_open() && get_option('thread_comments')) {
		wp_enqueue_script('comment-reply');
	}
}
add_action('wp_enqueue_scripts', 'shop_kit_scripts');

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';
/**
 * add inline style
 */
require get_template_directory() . '/inc/inline-style.php';


/*
* Customizer pro info .
*/
require get_template_directory() . '/inc/info/class-customize.php';

if (is_admin()) {
	require_once trailingslashit(get_template_directory()) . 'inc/about/about.php';
}

/**
 * Customizer additions.
 */

require get_template_directory() . '/inc/customizer/customizer.php';
require get_template_directory() . '/inc/customizer/customizer-helper.php';
/**
 * Recommend plugin 
 */
require get_template_directory() . '/inc/class-tgm-plugin-activation.php';
require get_template_directory() . '/inc/plugin-recomend.php';

/**
 * Load Jetpack compatibility file.
 */
if (defined('JETPACK__VERSION')) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Load WooCommerce compatibility file.
 */
if (class_exists('WooCommerce')) {
	require get_template_directory() . '/inc/woo-items/shop-kit-woocommerce.php';
}



if (!function_exists('shop_kit_is_not_woocommerce_activated')) {
	function shop_kit_is_not_woocommerce_activated()
	{
		if (in_array('woocommerce/woocommerce.php', apply_filters('active_plugins', get_option('active_plugins')))) return;
	}
}


/**
 * Filter the except length to 20 words.
 *
 * @param int $length Excerpt length.
 * @return int (Maybe) modified excerpt length.
 */
add_filter('excerpt_more', 'shop_kit_exerpt_empty_string', 999);
function shop_kit_exerpt_empty_string($more)
{

	if (is_admin()) {
		return $more;
	}
	return '';
}
function shop_kit_excerpt_length($length)
{
	if (is_admin()) {
		return $length;
	}
	return 30;
}
add_filter('excerpt_length', 'shop_kit_excerpt_length', 999);
