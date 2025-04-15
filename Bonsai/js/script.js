$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:1.97,
		autoplay:false,
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

