$(document).ready(function(){
	$('.hero-slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
		autoplay:false,
		speed:700,
		autoplaySpeed:800,
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
	$('.popular--for--appartments-slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:2,
		autoplay:false,
		speed:700,
		autoplaySpeed:800,
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
	$('.popular--for--home-slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:2,
		autoplay:false,
		speed:700,
		autoplaySpeed:800,
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
	$('.info-slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:2,
		autoplay:false,
		speed:700,
		autoplaySpeed:800,
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
	$('.product-image-slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:1,
		autoplay:false,
		speed:700,
		autoplaySpeed:800,
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
});
