$( document ).ready(function(){	
	$('#showHelpBubble').hover(
		function() {
    		$(".bubbleHelp").css("opacity", "1");
		}, 
		function() {
    		$(".bubbleHelp").css("opacity", "0");
	});
/* 											// open - close / toggle - on the same button 
	var closed = true;
	$(".openMenu").click(function () {
	    $('.megaWrapper').animate({
	        left: (closed)*-240+'px'
	    }, 300);
	    closed = !closed;
	});*/

	$(document).mouseup(function (e){
    	var container = $('.rightCanvasMenu');
    	var vraper = $('.fa-bars');
    	var posLeft = $('.megaWrapper').css('left');
    	if (vraper.is(e.target)){
    		if(posLeft === '0px'){
			    $('.megaWrapper').animate({
			        left: '-240px'
			    }, 300);
			}
			else{
				$('.megaWrapper').animate({
			       	left: 0
			   	}, 300);
			}
		}
		else if (!container.is(e.target) // if the target of the click isn't the container...
        	&& container.has(e.target).length === 0) // ... nor a descendant of the container
    	{
        	$('.megaWrapper').animate({
	        left: 0
	    }, 300);
    	}    	
	});

	$(document).keydown(function(e) {
  		if (e.keyCode == 27) {
  			$('.megaWrapper').animate({
	        	left: 0
	    	}, 300);
		}
	});

	$(".fancyvideo").fancybox({
		'type': 'iframe',
		'transitionIn' : 'elastic',
		'padding' : 0,
		'autoScale' : false,
		'transitionOut' : 'fade',
		'width' : 1000,
		'height' : 600
	});



	function galeryOne(){
		$('.slidesContainer').animate({"margin-left": 0}, 400);
	}
	function galeryTwo(){
		$('.slidesContainer').animate({"margin-left": "-100%"}, 400);
	}
	function galeryThree(){
		$('.slidesContainer').animate({"margin-left": "-200%"}, 400);
	}
	function galeryFour(){
		$('.slidesContainer').animate({"margin-left": "-300%"}, 400);
	}
	$('#showSlideOne').click(galeryOne);
	$('#showSlideTwo').click(galeryTwo);
	$('#showSlideThree').click(galeryThree);
	$('#showSlideFour').click(galeryFour);

	$('.pickSlide h3').on('click', function(){
    $('.pickSlide h3.activate').removeClass('activate',1000);
    $(this).addClass('activate',1000);
	});


	$('.info-window').hover(
  		function(){ 
  			$(this).children().last().css("opacity", "1");
  			$(this).children().last().css("display", "block");
  		},
  		function(){
  			$(this).children().last().css("opacity", "0");
  			$(this).children().last().css("display", "none");
  		}
	);


});
