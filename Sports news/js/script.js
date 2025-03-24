$(document).ready(function(){
	$('.sports_news-slider').slick({
		arrows:true,
		dots: true,
		infinite: false,
		slidesToShow:1,
		autoplay:false,
		speed:500,
		autoplaySpeed:800,
	});
	$('.sports_article-slider').slick({
		arrows:true,
		dots: false,
		infinite: false,
		slidesToShow:3,
		autoplay:false,
		speed:500,
		autoplaySpeed:800,
	});
});

