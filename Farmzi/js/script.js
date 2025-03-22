$(document).ready(function(){
	$('.happy-clients-slider-items').slick({
		arrows:false,
		slidesToShow:1.73,
		speed: 400,
		initialSlide: 1,
		waitForAnimate: false,
		centerMode: true,
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

