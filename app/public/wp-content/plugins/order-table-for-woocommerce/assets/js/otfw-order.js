jQuery(function(t) {
	function isTransparent(bgcolor) {
		if (typeof bgcolor === 'string') {
			return ((bgcolor == "transparent" || bgcolor.substring(0, 4) == "rgba"));
		} else {
			return false;
		}
	}

	function help_collapse() {
		var sBrowser, sUsrAg = navigator.userAgent;
		if (sUsrAg.indexOf("Firefox") > -1) {
			sBrowser = "Firefox";
			// "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
		} else if (sUsrAg.indexOf("SamsungBrowser") > -1) {
			sBrowser = "Samsung Internet";
			// "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36
		} else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
			sBrowser = "Opera";
			// "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
		} else if (sUsrAg.indexOf("Trident") > -1) {
			sBrowser = "Microsoft Internet Explorer";
			// "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
		} else if (sUsrAg.indexOf("Edge") > -1) {
			sBrowser = "Microsoft Edge";
			// "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
		} else if (sUsrAg.indexOf("Chrome") > -1) {
			sBrowser = "Chrome";
			// "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
		} else if (sUsrAg.indexOf("Safari") > -1) {
			sBrowser = "Apple Safari";
			// "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
		} else {
			sBrowser = "unknown";
		}
		//alert(sBrowser);
		if (sBrowser != 'Chrome' && sBrowser != 'Firefox') {
			t('.otfw-products-tbody').on('shown.bs.arocollapse', function(e) {
				t(this).removeAttr("style");
			});
			t('.otfw-products-tbody').on('hide.bs.arocollapse', function(e) {
				t(this).hide();
			});
		} else {}
	}

	function makeSticky() {
		var adjust = {
			top: 0,
			bottom: -20
		};
		if (otfw.is_shop) {
			t(".admin-bar").length && (adjust.top += t("#wpadminbar").outerHeight()), t(".storefront-handheld-footer-bar").is(':visible') && (adjust.bottom += t(".storefront-handheld-footer-bar").outerHeight());
			t(".otfw-products").stickyHooters(adjust);
			textureEl = jQuery('.sticky-hooters_sticky-wrapper');
			bgcolor = jQuery(textureEl).css('background-color');
			if (isTransparent(bgcolor)) {
				jQuery(textureEl).parents().each(function() {
					if (!isTransparent(jQuery(this).css('background-color'))) {
						bgcolor = jQuery(this).css('background-color');
						return false;
					}
				});
			}
			jQuery('.sticky-hooters_sticky-wrapper').css({
				zIndex: 1,
				'background-color': bgcolor
			});
			jQuery(window).on('resize', function() {
				jQuery('.sticky-hooters_sticky-wrapper').css({
					width: jQuery('.otfw').width()
				});
			});
		}
	}
	if (
		Category = Backbone.Model.extend({
			defaults: {
				"updating": false
			},
			initialize: function() {
				this.set('id', this.get("cat_ID"));
			}
		}),
		Categories = Backbone.Collection.extend({
			parse: function(t) {
				return this.url = t.products
			},
			model: Category,
			filterByIds: function(idArray) {
				return this.reset(_.map(idArray, function(id) {
					return this.get(id);
				}, this));
			}
		}),
		CategoryView = Backbone.View.extend({
			tagName: "tbody",
			className: "otfw-products-tbody collapse ",
			isUpdating: !1,
			initialize: function() {
				if (otfw.show_cats_expand == 1) {
					this.$el.addClass("in")
				}
				this.$el.attr("id", "tbodycat_" + this.model.get("cat_ID")),
					this.template = _.template(t("#categoryTemplate").html())
			},
			render: function() {
				var t = _.extend(this.model.attributes, {});
				return this.$el.html(this.template(t)), this
			},
		}),
		CategoryView2 = Backbone.View.extend({
			tagName: "tbody",
			isUpdating: !1,
			initialize: function() {
				this.$el.attr("id", "tbodycat2_" + this.model.get("cat_ID")),
					this.template = _.template(t("#categoryTemplate2").html())
			},
			render: function() {
				var t = _.extend(this.model.attributes, {});
				return this.$el.html(this.template(t)), this
			},
		}),
		ProductModel = Backbone.Model.extend({
			defaults: {
				updating: !1
			}
		}),
		ProductModels = Backbone.Collection.extend({
			parse: function(data) {
				this.url = data.next_page;
				return data.products;
			},
			model: ProductModel
		}),
		table = Backbone.View.extend({
			el: jQuery(".otfw_footer_total"),
			initialize: function() {}
		}),
		table2 = Backbone.View.extend({
			el: jQuery(".otfw_updating"),
			initialize: function() {}
		}),
		ProductModelView = Backbone.View.extend({
			tagName: "tr",
			className: "otfw-item",
			isUpdating: !1,
			events: {
				"focusout input[name='quantity']": "item_added"
			},
			initialize: function() {
				$this = this;
				window.first = true;
				window.queue = [];
				this.table = new table({
					parent: this
				});
				this.table2 = new table2({
					parent: this
				});
				this.model.get("on_sale_pre") && this.$el.addClass("otfw_sale"), this.$el.attr("id", "otfw_item_" + this.model.get("id")), this.model.get("in_stock_pre") || this.$el.addClass("otfw_no_stock"), this.template = _.template(t("#productTemplate").html()), this
			},
			item_added: function(evt) {
				var me = this;
				var $current = t(evt.currentTarget);
				var value = parseFloat($current.val());
				if (isNaN(value)) {
					value = 0;
				}
				var $form = $current.closest("form");
				window.queue.push([me, value, $form, $current]);
				if (window.first === true) {
					this.table2.$el.show();
					if ("yes" == otfw.stick_table) {
						jQuery('.sticky-hooters_sticky-footer').find(".otfw_updating").show();
					}
					window.first = false;
					me.moveAlong();
				}
			},
			moveAlong: function() {
				var request;
				if (window.queue.length) {
					request = queue.shift();
					this.updateQuantity(request);
				} else {
					window.first = true;
					this.table2.$el.hide();
					if ("yes" == otfw.stick_table) {
						jQuery('.sticky-hooters_sticky-footer').find(".otfw_updating").hide();
					}
					jQuery(document).trigger('otfw_queue_empty');
				}
			},
			render: function() {
				var t = _.extend(this.model.attributes, {});
				return this.$el.html(this.template(t)), this
			},
			updating: function() {},
			updateQuantity: function(item) {
				var u = this;
				var me = item[0];
				var value = item[1];
				var $form = item[2];
				var $current = item[3];
				var hash = me.model.get('cart_item_hash_pre');
				var manage_stock = me.model.get("manage_stock_pre");
				var title = me.model.get("title_pre");
				var min = me.model.get("max_to_purchase_pre");
				var min_qty = _.isEmpty(jQuery($current).attr('min')) ? '' : Number(jQuery($current).attr('min'));
				var max_qty = _.isEmpty(jQuery($current).attr('max')) ? '' : Number(jQuery($current).attr('max'));
				if (_.isNumber(min_qty) && !Number.isNaN(min_qty) && value != 0 && value < min_qty) {
					jQuery('#stock_modal').on('show.bs.aromodal', function() {
						jQuery(this).trigger("focus");
						var modal = jQuery(this);
						modal.find('.aromodal-body').html(otfw.min_message_1 + min_qty + '.');
					});
					jQuery("#stock_modal").aromodal();
					$current.val(min_qty).trigger('focusout');
					u.moveAlong();
					return;
				} else if (_.isNumber(max_qty) && !Number.isNaN(max_qty) && value != 0 && value > max_qty) {
					jQuery('#stock_modal').on('show.bs.aromodal', function() {
						jQuery(this).trigger("focus");
						var modal = jQuery(this);
						modal.find('.aromodal-body').html(otfw.max_message_1 + max_qty + '.');
					});
					jQuery("#stock_modal").aromodal();
					$current.val(max_qty).trigger('focusout');
					u.moveAlong();
					return;
				}
				if (me.model.get("parent_manage_stock_pre") !== true) {
					if (manage_stock === true) {
						if (value > min && min != -1 && otfw.stock_warning == 'yes') {
							jQuery('#stock_modal').on('show.bs.aromodal', function() {
								jQuery(this).trigger("focus");
								var modal = jQuery(this);
								modal.find('.aromodal-body').html(otfw.stock_message_part_3 + '<i>' + title + '</i>' + otfw.stock_message_part_2 + min + '.');
							});
							jQuery("#stock_modal").aromodal();
						}
					}
					if (manage_stock === true && value > min && min != -1) {
						var o = hash,
							n = $current,
							s = min;
						n.val(s);
					} else if (value > min && min != -1) {
						var o = hash,
							n = $current,
							s = min;
						n.val(s);
					} else {
						var o = hash,
							n = $current,
							s = value;
					}
				} else {
					var o = hash,
						n = $current,
						s = value;
				}
				isNaN(s) && (s = 0);
				if (o) {
					data = {
						cart_item_key: o,
						quantity: s,
						update_cart: true,
						nonce: otfw.nonce,
					};
					t.ajax({
						url: otfw.wc_ajax_url.replace('%%endpoint%%', 'otfw_update_cart'),
						method: "POST",
						data: data
					}).done(function(data1) {
						if (data1.status === true) {
							if (otfw.stock_warning == 'yes') {
								jQuery('#stock_modal').on('show.bs.aromodal', function() {
									jQuery(this).trigger("focus");
									var modal = jQuery(this);
									modal.find('.aromodal-body').html(otfw.stock_message_part_3 + '<i>' + title + '</i>' + otfw.stock_message_part_2 + data1.product_quantity + '.');
								});
								jQuery("#stock_modal").aromodal();
							}
							$current.val(data1.product_quantity);
							value = data1.product_quantity;
						} else if (data1.error == true) {
							jQuery('#stock_modal').on('show.bs.aromodal', function() {
								jQuery(this).trigger("focus");
								var modal = jQuery(this);
								modal.find('.aromodal-body').html(otfw.warning_message);
							});
							jQuery("#stock_modal").aromodal();
							$form[0].reset();
							return;
						}
						me.cartUpdated(data1);
						if (value <= 0) me.model.set('cart_item_hash_pre', '');
						me.q_out(data1);
					}).done(function() {
						u.moveAlong();
					});
				} else if (value > 0) {
					var data2 = $form.serializeArray();
					data2.push({
						name: 'nonce',
						value: otfw.nonce
					});
					t.ajax({
						url: otfw.wc_ajax_url.replace('%%endpoint%%', 'otfw_add_to_cart'),
						// async: false,
						method: "POST",
						data: data2
					}).done(function(data) {
						if (data.status === true) {
							if (otfw.stock_warning == 'yes') {
								jQuery('#stock_modal').on('show.bs.aromodal', function() {
									jQuery(this).trigger("focus");
									var modal = jQuery(this);
									modal.find('.aromodal-body').html(otfw.stock_message_part_3 + '<i>' + title + '</i>' + otfw.stock_message_part_2 + data.product_quantity + '.');
								});
								jQuery("#stock_modal").aromodal();
							}
							$current.val(data.product_quantity);
							value = data.product_quantity;
						} else if (data.error == true) {
							jQuery('#stock_modal').on('show.bs.aromodal', function() {
								jQuery(this).trigger("focus");
								var modal = jQuery(this);
								modal.find('.aromodal-body').html(otfw.warning_message);
							});
							jQuery("#stock_modal").aromodal();
							$form[0].reset();
							return;
						}
						me.model.set('cart_item_hash_pre', data.cart_item_hash);
						me.cartUpdated(data);
						me.table.$el.find("#otfw_checkout_button").removeClass('disabled');
						me.q_out(data);
					}).done(function() {
						u.moveAlong();
					});
				} else if (value === 0) {
					u.moveAlong();
				}
			},
			cartUpdated: function(data) {
				this.$el.find(".otfw-cart-action-2").css('visibility', 'visible').hide().fadeIn('slow'),
					this.$el.find(".otfw_item_amount").html(data.item_amount)
			},
			q_out: function(t) {
				qq = (t.quant_item);
				q = parseFloat(t.quant);
				if (q == 0) {
					this.table.$el.find("#otfw_checkout_button").addClass('disabled');
				}
				this.table.$el.find(".otfw_test").html(q), this.table.$el.find(".otfw_test_2").html(qq);
				if ("yes" == otfw.stick_table) {
					jQuery('.sticky-hooters_sticky-footer').find(".otfw_test").html(q), jQuery('.sticky-hooters_sticky-footer').find(".otfw_test_2").html(qq)
				}
			},
			CartTotalQuantity: function() {
				var t = this.model.get("in_cart_quantity_pre");
				return parseFloat(t)
			},
		}),
		ProductModelListView = Backbone.View.extend({
			container: null,
			tbody: null,
			el: ".otfw-products",
			initialize: function() {
				this.spinner = jQuery('.otfw_table_spinner');
				this.isLoading = false;
			},
			render: function() {
				container = document.createDocumentFragment();
				if (((typeof otfw_short !== 'undefined') && otfw_short.show_cats == 'true') || (typeof otfw_short == 'undefined' && otfw.show_cats_shop == 1)) {
					this.collection.categories.forEach(this.addOneCat, this);
					t('.otfw-products thead').after(container);
				} else {
					tbody = document.createElement('tbody');
					var att = document.createAttribute("class");
					att.value = "otfw-products-tbody";
					tbody.setAttributeNode(att);
					this.collection.products.forEach(this.addOne, this);
					container.appendChild(tbody);
					this.el.appendChild(container);
				}
			},
			reset: function() {
				this.$el.find("tr.otfw-item").remove(), this.render()
			},
			addOne: function(e) {
				var i = this;
				if ("variable" == e.get("type_pre")) _.each(e.get("variations_pre"), function(t) {
					i.collection.add(t)
				});
				else {
					var o = new ProductModelView({
						model: e
					});
					tbody.appendChild(o.render().el)
				}
			},
			addOneCat: function(e) {
				var p = new CategoryView({
					model: e
				});
				var pp = new CategoryView2({
					model: e
				});
				var container2 = p.render().el;
				container.appendChild(pp.render().el);
				var m = this.collection.products.filter(function(b) {
					return _.indexOf(b.get("cat_id_pre"), e.get("cat_ID"), false) !== -1;
				});
				m.forEach(function(e) {
					if ("variable" == e.get("type_pre")) _.each(e.get("variations_pre"), function(t) {
						this.collection.products.add(t);
					});
					else {
						var o = new ProductModelView({
							model: e
						});
						container2.appendChild(o.render().el);
					}
				}, container2);
				container.appendChild(container2);
			},
		}), ProductModelsFooterView = Backbone.View.extend(), "undefined" != typeof OTFW_Items) {
		var i = new ProductModels();
		var uu = new Categories();
		uu.add(otfw.cats);
		var uuu = uu.reject({
			category_count: 0
		});
		var u = new Categories(uuu);
		if (((typeof otfw_short !== 'undefined') && otfw_short.show_cats == 'true' && otfw_short.cats.length !== 0)) {
			uuu = u.filterByIds(otfw_short.cats);
			u = new Categories(uuu);
		}
		var y = new ProductModelListView({
			collection: {
				products: i,
				categories: u
			}
		});
		i.url = OTFW_Items.next_page;
		i.add(OTFW_Items.products);
		y.render();
		var main = jQuery('.otfw');
		main.fadeTo(400, 1).promise().then(function() {
			jQuery(document).trigger('otfwtable_shown');
		});
		main.find('.otfw_table_spinner').detach();
	}
	t(document).on('keyup', 'input.qty', function(e) {
		if (e.keyCode == 13) {
			jQuery(this).trigger('otfw-enter');
		}
	});
	"yes" == otfw.stick_table && makeSticky(),
		help_collapse();
});
jQuery(document).ready(function($) {
	$('.out-of-stock').each(function() {
		$(this).parents('tr').height($('.otfw-products').find('.quantity').parents('tr').height());
		$(this).parents('tr').find('.otfw-cart-action-2').detach();
	});
	$(document).on('click', '.mini_cart_item a.remove', function() {
		location.reload();
	});
	$(document).on('click', '#otfw_checkout_button', function(e) {
		if (window.first === false) {
			e.preventDefault();
			$(document).on('otfw_queue_empty', function() {
				$('#otfw_checkout_button')[0].click();
			});
		}
	});
	jQuery(document).on('input change', '.qty', function() {
		var $this = this;
		clearTimeout(this.timeout);
		this.timeout = setTimeout(function() {
			jQuery($this).trigger('focusout');
		}, 2000);
	});
	if ("yes" == otfw.stick_table) {
		$('.otfw-products tbody.otfw-products-tbody tr:first td').each(function(index) {
			var new_width = $(this).width();
			$('.sticky-hooters_wrapper .otfw-products thead tr th').eq(index).width(new_width + 'px');
		});
	}
});
