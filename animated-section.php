<?php
/**
 * Plugin Name:       Animated Section
 * Description:       A section container block with scroll-triggered animations for nested content.
 * Version:           0.1.0
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author:            Anirudh p
 * License:           GPLv2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       animated-section
 *
 * @package TelexAnimatedSection
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function telex_animated_section_block_init() {
	register_block_type( __DIR__ . '/build/' );
}
add_action( 'init', 'telex_animated_section_block_init' );