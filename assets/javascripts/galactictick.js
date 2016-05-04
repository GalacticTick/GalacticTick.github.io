

$(function() {
	$(window).bind('scroll', function(e){ 
		$("#galaxy").css("transform","rotate("+window.scrollY/50+"deg)"); 
	});
});