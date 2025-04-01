$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:5,
		autoplay: false,
		infinite: false,
		speed:500,
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
	$('.reviews-slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:1,
		autoplay: false,
		infinite: false,
		speed:500,
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

