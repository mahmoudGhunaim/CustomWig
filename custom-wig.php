<?php
/*
Plugin Name: Custom Wig
Description: A simple plugin for custom functionalities.
Version: 1.0
Author: Your Name
*/

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

// Define constants.
define('CW_PLUGIN_PATH', plugin_dir_path(__FILE__));
define('CW_PLUGIN_URL', plugin_dir_url(__FILE__));

// Include settings page.
require_once CW_PLUGIN_PATH . 'includes/settings-page.php';

// Hook to add admin menu.
add_action('admin_menu', 'cw_add_admin_menu');

// Function to add the admin menu.
function cw_add_admin_menu() {
    add_menu_page(
        'Custom Wig Settings',   // Page title
        'Custom Wig',            // Menu title
        'manage_options',        // Capability
        'custom-wig',            // Menu slug
        'cw_settings_page',      // Callback function
        'dashicons-admin-generic' // Icon
    );
}

// Activation hook.
function cw_activate() {
    // Actions to perform on activation.
}
register_activation_hook(__FILE__, 'cw_activate');

// Deactivation hook.
function cw_deactivate() {
    // Actions to perform on deactivation.
}
register_deactivation_hook(__FILE__, 'cw_deactivate');