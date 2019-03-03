$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		navigation: false,
		margin: 15,
		autoplay : true,
		responsive:{
			0:{
				items:2,
			},
			768:{
				items:4,
			},
			1024: {
				items:6,
			}
		}
	});
	
	$(function() {
		$('#navigation a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});
});

$(window).load(function() {
	$( 'div.preloader' ).fadeOut( 'slow' );
});