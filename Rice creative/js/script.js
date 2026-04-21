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
	$('.testimonial-slider').slick({
		arrows:false,
		dots:true,
		slidesToShow: 3,
		autoplay:false,
		speed:500,
		autoplaySpeed:800,
		centerMode: true,
		centerPadding: '60px',
		adaptiveHeight: false,
		responsive: [
			{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3
			}
			},
			{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
			}
		]
	});
});

