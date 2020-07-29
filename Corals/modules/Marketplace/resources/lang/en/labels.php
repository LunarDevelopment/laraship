<?php

return [
    'auth' => [
        'sign_in_start_session' => 'Sign in to start your session',
        'or_using_form' => 'Or using form below',
        'no_account_register' => 'No Account? Register',
        'remember_me' => 'Remember Me',
        'login' => 'Login',
        'login_register' => 'Login / Register Account',
        'guest_checkout' => 'Continue as guest',
        'forget_password' => 'Forgot your password',
        'register_new_account' => 'Register a new account',
        'sign_in_facebook' => 'Facebook',
        'sign_in_twitter' => 'Twitter',
        'sign_in_google' => 'Google',
        'sign_in_github' => 'Github',
        'close' => 'Close',
        'country' => 'Country',
        'cell_phone' => 'Cell Phone',
        'agree' => 'I agree to the ',
        'terms' => 'terms',
        'accept_terms' => 'You have to accept our terms.',
        'terms_modal_header' => ':siteName Terms and policy',
        'register' => 'Register',
        'already_have_account' => 'Already have an account',
        'save' => '<i class="fa fa-save"></i> Save :title',
    ],
    'settings' => [
        'general' => [
            'enable_subdomain' => 'Enable Subdomain',
            'enable_domain_parking' => 'Enable Domain Parking',
            'subscription_product' => 'Recurring Product which endor is required to Subscribe to',
            'product_limit_feature' => 'Recurring Product Feature that limits maximum active products vendor can have ',
            'commission_feature' => 'Recurring Product Feature that specifies platform commission',
            'vendor_require_subscription' => 'Subscription Required for vendor enrollment',
            'fixed_commission_percentage' => 'Fixed Commission Percentage',
            'vendor_role' => 'Vendor Role',
            'fallback_plan' => 'fallback plan when subscription is not paid or cancelled',
            'vendor_agreement_text' => 'Agreement text to be shown above the enroll button',
            'abandoned_cart_email_after' => 'Marketplace abandoned cart email after (hours)'
        ],
        'company' => [
            'owner' => 'Owner',
            'name' => 'Name',
            'street' => 'Street1',
            'city' => 'City',
            'state' => 'State',
            'zip' => 'Zip',
            'country' => 'Country',
            'phone' => 'Phone',
            'email' => 'Email',
        ],
        'shipping' => [
            'weight_unit' => 'Weight unit',
            'dimensions_unit' => 'Dimensions unit',
            'shippo_live_token' => 'Shippo Live Token',
            'shippo_test_token' => 'Shippo Test Token',
            'shippo_sandbox_mode' => 'Shippo Sandbox Mode',
            'select_method' => 'Please select Shipping method',
            'no_available_shipping' => 'Sorry there is no available shipping methods for Store : :store, Products: :products',
        ],
        'bank_information' => 'Bank Information',
        'tax' => [
            'calculate_tax' => 'Enable Tax Calculation',

        ],
        'rating' => [
            'enable' => 'Enable Rating',
            'enable_comment' => 'Enable Comments',
        ],
        'wishlist' => [
            'enable' => 'Enable Wishlist',
        ],
        'appearance' => [
            'page_limit' => 'Shop page limit',
            'enable_tags' => 'Enable Tags',
        ],
        'search' => [
            'title_weight' => 'Title Weight',
            'content_weight' => 'Content Weight',
            'enable_wildcards' => 'Enable Wildcard Search',
        ],
        'additonal_charge' => [
            'title' => 'Charge title to be displayed to the end user on checkout',
            'amount' => 'Charge Amount',
            'type' => 'Charge Type',
            'gateways' => 'Apply for these payment gateways only (comma seperated)',
        ],
        'checkout' => [
            'points_redeem_enable' => 'Enable Redeem Points'
        ],

    ],
    'cart' => [
        'item_has_been_update' => 'Item quantity has been updated',
        'item_has_been_delete' => 'Item has been deleted from Cart',
        'cart_empty' => 'Your cart is Empty now',
        'product_has_been_add' => 'Product has been added to cart successfully',
        'product' => 'Product',
        'quantity' => 'Quantity',
        'price' => 'Price',
        'sub_total' => 'Subtotal',
        'continue_shop' => 'Continue Shopping',
        'proceed_checkout' => 'Proceed to Checkout',
        'empty_cart' => 'Empty Cart',
        'no_item_in_shopping' => 'You have no items in your shopping cart',
        'have_coupon' => 'Have a Coupon ?',
        'have_points' => 'Have points to redeem ?',
        'have_no_points' => 'Sorry, you dont have enough points to redeem',
        'have_points_to_redeem' => 'You can redeem :points_needed points to pay for this order, your available balance : :available_points_blanace ',
    ],
    'store' => [
        'all_stores' => 'All Stores',
        'enroll' => 'Become a Seller',
        'store_details' => 'Store Details',
        'save_store_details' => 'Save Store Details',
        'become_a_seller' => 'Become a Seller',
        'store_settings' => 'Store Settings',
        'store_url' => 'Store URL : <a target="_blank" href=":url">:url</a> ',
        'enroll_confirm' => '<i class="fa fa-check"></i>Yes I want to enroll'
    ],
    'product' => [
        'image_upload' => 'Image has been uploaded Successfully',
        'option_cannot_global' => 'Options cannot be global and variable at same time',
        'variations' => '<i class="fa fa-fw fa-sliders"></i> Variations',
        'variations_create' => '<i class="fa fa-fw fa-plus"></i> Add New Variations',
        'category' => 'Product Categories',
        'file' => 'File',
        'description' => 'Description',
        'add_download' => 'click to add new download.',
        'variation_option' => 'Variation Options',
        'caption' => 'Short Description',
        'more' => 'More &rightarrow;'
    ],
    'checkout' => [
        'please_enter_payment' => 'Please enter payment details',
        'please_select_shipping' => 'Please select shipping method',
        'title' => 'Billing Address',
        'save_billing' => 'Save billing address to my profile',
        'copy_billing' => 'Copy billing address to shipping address',
        'save_shipping' => 'Save shipping address to my profile',
        'shipping_title' => 'Shipping Address ',
        'title_checkout' => ' Checkout Details',
        'cart_detail' => 'Cart Details',
        'address_checkout' => 'Checkout Address',
        'select_shipping' => 'Select Shipping',
        'select_payment' => 'Select Payment',
        'enter_payment' => 'Enter Payment Details',
        'order_review' => 'Order Review',
        'shipping_options' => 'Store : :store, Products: :products ',
        'sub_total' => 'Subtotal',
        'tax' => 'Tax',
        'discount' => 'Discount',
        'total' => 'Your Total',
        'complete_order' => '<i class="fa fa-cart"></i> Complete Order ',
        'pay_using_point' => 'I want to redeem my points'
    ],
    'attribute' => [
        'order' => 'Order',
        'value' => 'Value',
        'display' => 'Display',
        'add_new_option' => ' click to add new option.'
    ],
    'mail' => [
        'amount' => 'Amount',
        'qt' => 'QT',
        'description' => 'Description',
        'sku' => 'SKU#',
        'type' => 'Type',
        'total' => 'TOTAL',
        'download' => 'Downloadables',
        'file' => 'File',
        'premium_content' => 'Premium Content Pages',
        'bill_address' => 'Billing Address',
        'address_one' => 'Address 1',
        'address_two' => 'Address 2',
        'city' => 'City',
        'state' => 'State',
        'zip' => 'Zip',
        'country' => 'Country',
        'shipping_details' => 'Shipping Details',
        'tracking_num' => ' Tracking Number',
        'tracking_label' => 'Tracking Label',
        'click_here' => 'Click Here'
    ],
    'order' => [
        'download' => 'Downloads',
        'success' => 'Success',
        'order_has_been_placed' => 'Your Order has been placed successfully',
        'go_to_my_order' => 'Go to my orders',
        'order_detail' => 'Order Details',
        'update_order' => 'Update Order',
        'my_download' => 'My Downloads',
        'my_order' => 'My Orders',
        'private_page' => 'My Private Pages',
        'title' => 'Orders',
        'refund_order' => 'Refund',
        'billing_add' => 'Billing Address',
        'payment_details' => 'Payment Details',
        'click_here' => 'Click Here',
        'shipping_details' => 'Shipping Details',
        'tracking_num' => ' Tracking Number',
        'tracking_label' => 'Tracking Label',
        'file' => 'File',
        'description' => 'Description',
        'download_able' => 'Downloadables',
        'private_access' => 'Private Pages Access',
        'magic' => '<i class="fa fa-magic"></i> :title',
        'desc' => 'Desc',
        'date' => 'Date',
        'loc' => 'Location',
        'history' => 'History',
        'no_track' => 'is no tracking info available',
        'contact_buyer' => 'Contact Buyer',
        'transactions' => [
            'title' => 'Transactions',
            'type' => 'Type',
            'amount' => 'Amount',
            'paid_amount' => 'Paid Amount',
            'reference' => 'Reference'
        ]
    ],
    'shipping' => [
        'pending' => 'Pending',
        'expired' => 'Expired',
        'place_holder' => 'All Countries',
        'download_import_report' => '<i class="fa fa-download"></i> Download import report',
        'clear_import_report' => '<i class="fa fa-trash-o"></i> Clear import report',
        'upload_warning' => 'Warning, All your shipping rules will be deleted and replaced with the uploaded file',
        'download_sample_upload' => 'Click <a href=":sample_upload_url">here</a> to download sample file</a>'
    ],
    'shop' => [
        'title' => 'Orders',
        'my_orders' => 'My Orders',
        'my_invoices' => 'My Invoices',
        'buy' => 'Buy Product',
        'add' => 'Add to Cart',
        'out_stock' => ' Out Of Stock',
        'add_cart' => '<i class="fa fa-fw fa-cart-plus" aria-hidden="true"></i> Add to Cart',
        'no_setting_found' => 'No settings found.',
        'search' => 'Search...',
        'search_results_for' => 'Search results for: :search'

    ],
    'sku' => [
        'index_title' => '[:name] :title'
    ],
    'widget' => [
        'coupon' => 'Coupons',
        'my_store_statistics' => 'My Store Statistics',
        'buyer_statistics' => 'Buyer Account Statictics',
        'my_download' => 'My Downloads',
        'products_by_brand' => 'Products By Brand',
        'my_order' => 'My Orders',
        'private_page' => 'My Private Pages',
        'my_wishlist' => 'My Wishlist',
        'orders' => 'Orders',
        'product_categories' => 'Product Categories',
        'product' => 'Products',
        'my_store_sales' => 'Store Sales',
        'my_store_orders' => 'Store Orders',
        'my_store_products' => 'Store Products',

    ],
    'transactions' => [
        'total_sales' => 'Total Completed Sales',
        'withdraw' => 'Withdraw',
        'total_completed_withdrawals' => 'Completed Withdrawals',
        'total_commision' => 'Total Commision',
        'total_pending_withdrawals' => 'Pending Withdrawals',
        'current_balance' => 'Your Current balance is :balance ',
        'withdraw_request_success' => 'Your withdraw request has been submitted successfully and you will be notified when request processed',
        'withdraw_notes_help' => 'Include your back account details and any other other notes required for the transfer.',
        'current_balance_withdraw' => 'Your Current balance is :balance, you can request to withdraw from your balance from <a class="modal-load btn btn-sm btn-primary" data-title="Create Withdrawal Request"  href=":withdraw_url">Here</a> ',
    ],
    'category' => [
        'hierarchy' => 'Hierarchy',
    ]
];
