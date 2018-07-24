let navigation=$('nav');
let menu=$('#hamburger');

menu.click(function(){
	navigation.toggleClass('slide-right');
	$('ul').toggleClass('slide-right');
});

