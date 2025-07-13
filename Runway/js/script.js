$(document).ready(function(){
	let $slider = $('.slider');
	let $counter = $('.slider-counter');

	$slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
	let i = (currentSlide ? currentSlide : 0) + 1;
	$counter.text(i + '/' + slick.slideCount);
	});

	$slider.slick({
		arrows:true,
		dots:false,
		slidesToShow:2,
		speed:500,
	});
});

