$(document).ready(function(){
	$('.ready-slider').slick({
		arrows:true,
    dots: false,
    centerMode: false,
		infinite: false,
		slidesToShow:2.5,
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

