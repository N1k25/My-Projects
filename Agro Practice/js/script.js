$(document).ready(function(){
	$('.hero-slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		slidesToScroll:1,
		autoplay:false,
		speed:500,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 767,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

