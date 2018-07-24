let navigation=$('nav');
let menu=$('#hamburger');

menu.click(function(){
	navigation.toggleClass('slide-right');
});

$('li>a').click(function(){
	navigation.addClass('slide-right');
});