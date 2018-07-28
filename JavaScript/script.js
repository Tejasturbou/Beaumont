$(document).ready(function(){

	let navigation=$('nav');
	let menu=$('#hamburger');
	let backToStart = $('.return_to_start');

	menu.click(function(){
		navigation.toggleClass('slide-right');
	});

	$('li>a, main, #close img').click(function(){
		navigation.addClass('slide-right');
	});

	window.addEventListener('scroll', function(){
		const yLocation = window.scrollY;
		if (yLocation >= 530){
			$('.percentage-1').addClass('animate-3');
			$('.percentage-2').addClass('animate-4');
			$('.percentage-3').addClass('animate-5');
		}

		if (yLocation >= 480){
			backToStart.fadeIn("slow");
		} else {
			backToStart.fadeOut("slow");
		}
	});

	backToStart.click(function(evt){
        $('body').scrollTop(0);
    });

});


