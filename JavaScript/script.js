let navigation=$('nav');
let menu=$('#hamburger');

menu.click(function(){
	navigation.toggleClass('slide-right');
});

$('li>a, main, #close img').click(function(){
	navigation.addClass('slide-right');
});

