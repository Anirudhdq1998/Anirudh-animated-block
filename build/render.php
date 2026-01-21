<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$animation_type = isset( $attributes['animationType'] ) ? $attributes['animationType'] : 'fadeIn';
$wrapper_attributes = get_block_wrapper_attributes(
	array(
		'class' => 'animated-section animated-section--' . esc_attr( $animation_type ),
	)
);
?>
<div <?php echo $wrapper_attributes; ?>>
	<?php echo $content; ?>
</div>