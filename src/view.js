
/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 */

document.addEventListener('DOMContentLoaded', function() {
	const animatedSections = document.querySelectorAll('.wp-block-telex-animated-section');

	if (!animatedSections.length) {
		return;
	}

	// Create an Intersection Observer
	const observerOptions = {
		root: null,
		rootMargin: '0px',
		threshold: 0.1
	};

	const observer = new IntersectionObserver(function(entries) {
		entries.forEach(function(entry) {
			if (entry.isIntersecting) {
				// Add the visible class to trigger animation
				entry.target.classList.add('is-visible');
				// Stop observing this element after it's animated
				observer.unobserve(entry.target);
			}
		});
	}, observerOptions);

	// Observe all animated sections
	animatedSections.forEach(function(section) {
		observer.observe(section);
	});
});
