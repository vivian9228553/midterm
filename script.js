$(document).ready(function() {
	$('.alt-nav>ul>li>a').hover(function(){

	    $('.p-hover').css('color', '#3366ff'); 
	});

	$('.li-click')click(function){
		$('.li-slide')slideDown(500);
	});
});