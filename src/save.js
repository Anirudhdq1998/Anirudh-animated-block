/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {
	const {
		animationType,
		animationDuration,
		animationTimingFunction,
		animationDelay,
		animationIterationCount,
		animationDirection,
		animationFillMode,
		animationPlayState,
	} = attributes;

	const blockProps = useBlockProps.save( {
		className: `animated-section animated-section--${animationType}`,
		style: {
			'--animation-duration': animationDuration,
			'--animation-timing-function': animationTimingFunction,
			'--animation-delay': animationDelay,
			'--animation-iteration-count': animationIterationCount,
			'--animation-direction': animationDirection,
			'--animation-fill-mode': animationFillMode,
			'--animation-play-state': animationPlayState,
		},
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}