$(document).ready(function(){

var  $pageSlide  = $("#page");
var  $navLeftSlide  = $(".leftM");
var  $navRightSlide  = $(".rightM");
	$('.leftNav').click(function(){
		$(this).trigger('toggle');
	});
		$('.leftNav').toggle(function(){	
			$(this).addClass('active');
			$('body').addClass('activeLeftMenu');
    		$('#page').animate({left:'60%'});
    		$('.leftM').animate({left:'0%'});
    	},function(){
    		$('#page').stop().animate({left:'0%'}, 300, function _afterAnimation() {
    $pageSlide.removeAttr('style');
});
			$('.leftM').stop().animate({left:'-60%'}, 300, function _afterAnimation() {
    $navLeftSlide.removeAttr('style');
});			
			$(this).removeClass('active');
			$('body').removeClass('activeLeftMenu');
    	});

$('.leftNav').click(function(){
		$(this).trigger('toggle');
	});
    	$('.rightNav').toggle(function(){	
    		$(this).addClass('active');
    		$('body').addClass('activeRightMenu');	
    		$('#page').animate({right:'60%'});
    		$('.rightM').animate({right:'0%'});
    	},function(){
    		$('#page').stop().animate({right:'0%'}, 300, function _afterAnimation() {
    $pageSlide.removeAttr('style');

});
			$('.rightM').stop().animate({right:'-60%'}, 300, function _afterAnimation() {
    $navRightSlide.removeAttr('style');
});	
			$(this).removeClass('active');
			$('body').removeClass('activeRightMenu');

    	});

 	$('.rightM, .leftM').click(function (event) {
        event.stopPropagation();
    });

    	$("html").on("click", function () {
    		if($('.rightNav').hasClass('active')){
    			$('.rightNav').trigger('click');
    		}
    		if($('.leftNav').hasClass('active')){
    			$('.leftNav').trigger('click');
    		}
    	})    	
		
	
});




$(window).resize(function() {
	
windowWidth = $(window).width();
	if(windowWidth > 767){
		$('#page').removeAttr('style');
		$('.rightM').removeAttr('style');

		if($('.rightNav').hasClass('active')){
		$('.rightNav').trigger( "click" );
		}
		if($('.leftNav').hasClass('active')){
		$('.leftNav').trigger( "click" );
		}

		}
});	
			

