$(window).on('load', function() {
	// Loader
	$('.overlay').fadeOut(500);
});

$(document).ready(function() {

	$(document).on('click', '.list', function() {

		var category = $(this).data('product');
		$(this).addClass('active').siblings().removeClass('active');
		if(category === 'all') $('.product').parent().fadeIn(500);
		else {
			$('.product').parent().fadeOut(10);
			$('.' + category).parent().parent().fadeIn(500);
		}

	});
	
	// Fire the scroll
	$("body").niceScroll({
		cursorcolor:"#222",
		cursorwidth: "15px",
		cursorborder: "none",
		cursorborderradius: "0",
		background: "transparent",
		zindex: 999,
		cursoropacitymin: 0,
		horizrailenabled: false
	});


	// Show scroll top button
	function ScrollTop() {
		var top = $(window).scrollTop();

		if(top <= 100) { $('.scroll-top').fadeOut(700); }
		else if(top > 100) { $('.scroll-top').fadeIn(700);  }
	}

	// Run this function on scroll
	$(window).scroll(function() { ScrollTop(); });

	// Run this on load
	ScrollTop();

	// Scroll to Top
	$(document).on('click', '.scroll-top', function() {
		 $('body, html').animate({scrollTop: 0}, 550);
	});


	// scrollreveal
	ScrollReveal().reveal('.reveal', {
	    delay: 350,
	    duration: 900,
	    scale: 0.85,
	    reset: true
	});

});



