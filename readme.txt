=== Animated Section ===

Contributors:      Anirudh p
Tags:              block, animation, container, section
Tested up to:      6.9
Stable tag:        0.1.0
License:           GPLv2 or later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

A section container block with scroll-triggered animations for nested content.

== Description ==

The Animated Section block provides a powerful way to add scroll-triggered animations to your WordPress site. This block acts as a container that can hold any other blocks inside it, and applies beautiful CSS animations when the section scrolls into view.

**Key Features:**

* **Multiple Animation Types**: Choose from fadeIn, slideUp, slideDown, slideLeft, slideRight, zoomIn, and zoomOut animations
* **Flexible Container**: Use InnerBlocks to nest any WordPress blocks inside
* **Smooth Animations**: CSS-based animations for optimal performance
* **Easy to Use**: Simple dropdown control in the block sidebar
* **Scroll Detection**: Automatically triggers animations when section enters viewport
* **Customizable**: Add your own content and styling inside the section

**Available Animations:**

* **fadeIn**: Gradually fades the content into view
* **slideUp**: Slides content upward into position
* **slideDown**: Slides content downward into position
* **slideLeft**: Slides content from right to left
* **slideRight**: Slides content from left to right
* **zoomIn**: Scales content from small to normal size
* **zoomOut**: Scales content from large to normal size

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/animated-section` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress
3. Add the Animated Section block to any page or post
4. Add content blocks inside the section
5. Choose your preferred animation from the sidebar control

== Frequently Asked Questions ==

= How do I change the animation type? =

Select the Animated Section block, then open the block settings sidebar on the right. You'll find an "Animation Type" dropdown where you can choose from various animation effects.

= Can I nest other blocks inside this section? =

Yes! The Animated Section block is designed to contain other blocks. Simply click the "+" button inside the section to add any WordPress block.

= When does the animation trigger? =

The animation triggers when the section scrolls into view (enters the viewport). Once triggered, the animation plays once and the content remains visible.

= Can I use multiple animated sections on one page? =

Absolutely! You can add as many Animated Section blocks as you need, each with its own animation type.

= Does this work with all themes? =

Yes, the Animated Section block works with any WordPress theme that supports the block editor (Gutenberg).

== Screenshots ==

1. The Animated Section block in the editor with InnerBlocks placeholder
2. Block sidebar showing the Animation Type dropdown control
3. Example of a fadeIn animation on the frontend
4. Multiple animated sections with different animation types

== Changelog ==

= 0.1.0 =
* Initial release
* Support for 7 animation types: fadeIn, slideUp, slideDown, slideLeft, slideRight, zoomIn, zoomOut
* InnerBlocks support for nesting content
* Scroll-triggered animation detection
* Block sidebar control for animation selection

== Technical Details ==

The block uses the Intersection Observer API to detect when sections enter the viewport, ensuring smooth performance even with multiple animated sections. Animations are pure CSS for optimal rendering performance.