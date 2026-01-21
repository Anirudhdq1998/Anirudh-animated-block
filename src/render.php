<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$telex_anim_section_type = isset( $attributes['animationType'] ) ? $attributes['animationType'] : 'fadeIn';
$telex_anim_section_duration = isset( $attributes['animationDuration'] ) ? $attributes['animationDuration'] : '0.8s';
$telex_anim_section_timing = isset( $attributes['animationTimingFunction'] ) ? $attributes['animationTimingFunction'] : 'ease-out';
$telex_anim_section_delay = isset( $attributes['animationDelay'] ) ? $attributes['animationDelay'] : '0s';
$telex_anim_section_iteration = isset( $attributes['animationIterationCount'] ) ? $attributes['animationIterationCount'] : '1';
$telex_anim_section_direction = isset( $attributes['animationDirection'] ) ? $attributes['animationDirection'] : 'normal';
$telex_anim_section_fill = isset( $attributes['animationFillMode'] ) ? $attributes['animationFillMode'] : 'forwards';
$telex_anim_section_play_state = isset( $attributes['animationPlayState'] ) ? $attributes['animationPlayState'] : 'running';

$telex_anim_section_style = sprintf(
	'--animation-duration: %s; --animation-timing-function: %s; --animation-delay: %s; --animation-iteration-count: %s; --animation-direction: %s; --animation-fill-mode: %s; --animation-play-state: %s;',
	esc_attr( $telex_anim_section_duration ),
	esc_attr( $telex_anim_section_timing ),
	esc_attr( $telex_anim_section_delay ),
	esc_attr( $telex_anim_section_iteration ),
	esc_attr( $telex_anim_section_direction ),
	esc_attr( $telex_anim_section_fill ),
	esc_attr( $telex_anim_section_play_state )
);

$telex_anim_section_attrs = get_block_wrapper_attributes(
	array(
		'class' => 'animated-section animated-section--' . esc_attr( $telex_anim_section_type ),
		'style' => $telex_anim_section_style,
	)
);
?>
<div <?php echo wp_kses_post( $telex_anim_section_attrs ); ?>>
	<?php echo wp_kses_post( $content ); ?>
</div>