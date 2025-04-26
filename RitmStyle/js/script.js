$(document).ready(function(){
	$('.reviews-slider').slick({
		centerMode: true,
		variableWidth: true,
		arrows:false,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed: 500,
		autoplaySpeed:3000,
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

