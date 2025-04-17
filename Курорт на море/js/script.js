$(document).ready(function(){
	// $('.slider').slick({
	// 	arrows: true,
	// 	dots:true,
	// 	slidesToShow:1,
	// 	autoplay:false,
	// 	speed:500,
	// 	autoplaySpeed:800,
	// 	responsive:[
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				slidesToShow:2
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 550,
	// 			settings: {
	// 				slidesToShow:1
	// 			}
	// 		}
	// 	]
	// });
	let $slider = $('.slider');
	let $counter = $('.slider-counter');

	$slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
	let i = (currentSlide ? currentSlide : 0) + 1;
	$counter.text(i + '/' + slick.slideCount);
	});

	$slider.slick({
	dots: false
	});
});

