/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, ToggleControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
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

	const blockProps = useBlockProps( {
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

	const animationOptions = [
		{ label: __( 'Fade In', 'animated-section' ), value: 'fadeIn' },
		{ label: __( 'Slide Up', 'animated-section' ), value: 'slideUp' },
		{ label: __( 'Slide Down', 'animated-section' ), value: 'slideDown' },
		{ label: __( 'Slide Left', 'animated-section' ), value: 'slideLeft' },
		{ label: __( 'Slide Right', 'animated-section' ), value: 'slideRight' },
		{ label: __( 'Zoom In', 'animated-section' ), value: 'zoomIn' },
		{ label: __( 'Zoom Out', 'animated-section' ), value: 'zoomOut' },
		{ label: __( 'Bounce In', 'animated-section' ), value: 'bounceIn' },
		{ label: __( 'Flip In', 'animated-section' ), value: 'flipIn' },
		{ label: __( 'Rotate In', 'animated-section' ), value: 'rotateIn' },
		{ label: __( 'Swing In', 'animated-section' ), value: 'swingIn' },
		{ label: __( 'Roll In', 'animated-section' ), value: 'rollIn' },
		{ label: __( 'Light Speed', 'animated-section' ), value: 'lightSpeed' },
		{ label: __( 'Tada', 'animated-section' ), value: 'tada' },
		{ label: __( 'Pulse', 'animated-section' ), value: 'pulse' },
		{ label: __( 'Jello', 'animated-section' ), value: 'jello' },
		{ label: __( 'Rubber Band', 'animated-section' ), value: 'rubberBand' },
		{ label: __( 'Shake', 'animated-section' ), value: 'shake' },
		{ label: __( 'Wobble', 'animated-section' ), value: 'wobble' },
		{ label: __( 'Jack In The Box', 'animated-section' ), value: 'jackInTheBox' },
	];

	const timingFunctionOptions = [
		{ label: __( 'Ease', 'animated-section' ), value: 'ease' },
		{ label: __( 'Ease In', 'animated-section' ), value: 'ease-in' },
		{ label: __( 'Ease Out', 'animated-section' ), value: 'ease-out' },
		{ label: __( 'Ease In Out', 'animated-section' ), value: 'ease-in-out' },
		{ label: __( 'Linear', 'animated-section' ), value: 'linear' },
		{ label: __( 'Step Start', 'animated-section' ), value: 'step-start' },
		{ label: __( 'Step End', 'animated-section' ), value: 'step-end' },
	];

	const directionOptions = [
		{ label: __( 'Normal', 'animated-section' ), value: 'normal' },
		{ label: __( 'Reverse', 'animated-section' ), value: 'reverse' },
		{ label: __( 'Alternate', 'animated-section' ), value: 'alternate' },
		{ label: __( 'Alternate Reverse', 'animated-section' ), value: 'alternate-reverse' },
	];

	const fillModeOptions = [
		{ label: __( 'None', 'animated-section' ), value: 'none' },
		{ label: __( 'Forwards', 'animated-section' ), value: 'forwards' },
		{ label: __( 'Backwards', 'animated-section' ), value: 'backwards' },
		{ label: __( 'Both', 'animated-section' ), value: 'both' },
	];

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Animation Type', 'animated-section' ) }>
					<SelectControl
						label={ __( 'Animation Effect', 'animated-section' ) }
						value={ animationType }
						options={ animationOptions }
						onChange={ ( value ) => setAttributes( { animationType: value } ) }
						help={ __( 'Choose the animation effect for this section', 'animated-section' ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Animation Timing', 'animated-section' ) } initialOpen={ false }>
					<TextControl
						label={ __( 'Duration', 'animated-section' ) }
						value={ animationDuration }
						onChange={ ( value ) => setAttributes( { animationDuration: value } ) }
						help={ __( 'How long the animation takes (e.g., 1s, 500ms)', 'animated-section' ) }
						placeholder="0.8s"
					/>

					<SelectControl
						label={ __( 'Timing Function', 'animated-section' ) }
						value={ animationTimingFunction }
						options={ timingFunctionOptions }
						onChange={ ( value ) => setAttributes( { animationTimingFunction: value } ) }
						help={ __( 'The speed curve of the animation', 'animated-section' ) }
					/>

					<TextControl
						label={ __( 'Delay', 'animated-section' ) }
						value={ animationDelay }
						onChange={ ( value ) => setAttributes( { animationDelay: value } ) }
						help={ __( 'Delay before animation starts (e.g., 0.5s, 200ms)', 'animated-section' ) }
						placeholder="0s"
					/>
				</PanelBody>

				<PanelBody title={ __( 'Animation Behavior', 'animated-section' ) } initialOpen={ false }>
					<TextControl
						label={ __( 'Iteration Count', 'animated-section' ) }
						value={ animationIterationCount }
						onChange={ ( value ) => setAttributes( { animationIterationCount: value } ) }
						help={ __( 'Number of times to play (e.g., 1, 3, infinite)', 'animated-section' ) }
						placeholder="1"
					/>

					<SelectControl
						label={ __( 'Direction', 'animated-section' ) }
						value={ animationDirection }
						options={ directionOptions }
						onChange={ ( value ) => setAttributes( { animationDirection: value } ) }
						help={ __( 'Whether animation plays forward, backward, or alternates', 'animated-section' ) }
					/>

					<SelectControl
						label={ __( 'Fill Mode', 'animated-section' ) }
						value={ animationFillMode }
						options={ fillModeOptions }
						onChange={ ( value ) => setAttributes( { animationFillMode: value } ) }
						help={ __( 'What styles apply before/after animation', 'animated-section' ) }
					/>

					<ToggleControl
						label={ __( 'Pause Animation', 'animated-section' ) }
						checked={ animationPlayState === 'paused' }
						onChange={ ( value ) => setAttributes( { animationPlayState: value ? 'paused' : 'running' } ) }
						help={ __( 'Pause the animation when it triggers', 'animated-section' ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<InnerBlocks
					renderAppender={ InnerBlocks.ButtonBlockAppender }
				/>
			</div>
		</>
	);
}