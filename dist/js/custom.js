$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
	a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
		var placeholder = $(this).attr('placeholder');
		$(this).focus(function(){ $(this).attr('placeholder', '');});
		$(this).focusout(function(){			 
			$(this).attr('placeholder', placeholder);  			
		});
	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();	
	$('.content').css({'padding-bottom':height_footer+0, 'padding-top':height_header+2});
	
	
	var viewport_wid = viewport().width;
	
	if (viewport_wid <= 991) {
		
	}
	
}

$(window).bind('load', handler);
$(window).bind('resize', handler);


$(document).ready(function(){
	/*dropdown menu*/
	$('.deploy__item').hover(
		function(){
			$(this).children('.deploy__dd-menu').slideDown(400);
		},
		function(){
			$(this).children('.deploy__dd-menu').slideUp(400);
		}
		);

	/*dropdown menu--two*/
	$(window).resize(function() {
		if ( $(window).width() > 768 ) {
			$('.dd-deploy').hover(
				function(){
					$(this).children('.deploy__dd-menu--two').slideDown(200);
				},
				function(){
					$(this).children('.deploy__dd-menu--two').slideUp(200);
				}
				);
		} 
	});

	/*slider*/
	$('.slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		nextArrow: '<i class="icon-arrow-left slick-prev"></i>',
		prevArrow: '<i class="icon-arrow-right slick-next"></i>'
	});

	/*toggle menu*/
	function toggleMenu() {
		var $trigger = $('#trigger_menu'),
		$menu = $('#list_menu');

		$trigger.click(function(){
			$(this).next($menu).slideToggle();
		});

		$(window).resize(function() {
			if ( $(window).width() > 768 ) {
				$menu.removeAttr('style');
			} 
		});
	}
	toggleMenu();


});

