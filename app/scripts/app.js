import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'slick-carousel';

$(() => {
	svg4everybody();

	/* activate slick-carousels inside Steps block */

	const selectors = ['#step1', '#step2', '#step3'];

	selectors.forEach(function (element, index) {
		$(element).slick({
			fade: true,
			dots: false,
			draggable: false,
			initialSlide: index,
			prevArrow: $(element + ' ~ .steps__arrow_prev'),
			nextArrow: $(element + ' ~ .steps__arrow_next'),
			autoplay: false,
			swipe: false,
			speed: 300,
			slidesToShow: 1,
			responsive: [
				{
					breakpoint: 769,
					settings: {
						arrows: false
					}
				}
			]
		});
	});
});
