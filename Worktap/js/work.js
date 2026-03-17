$(document).ready(function(){
	$('.work__card--1-slider').slick({
		centerMode: true,
		centerPadding: '60px',
		arrows:false,
		dots:false,
		slidesToShow:3,
		autoplay:false,
		speed:500,
		autoplaySpeed:800,
		asNavFor: '.work__card--1-sliderbig',
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
	$('.work__card--1-sliderbig').slick({
		arrows: true,
		fade: true,
		slidesToShow: 1,
		asNavFor: '.work__card--1-slider',
	});
});
