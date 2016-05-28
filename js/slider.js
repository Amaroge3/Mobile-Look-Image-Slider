"use strict" 

window.onload = function(){

var $nextButton = $("#arrowRight"),
	$prevButton = $("#arrowLeft"); 

var $slider = $("#slider");
	$slider.children().hide();
	$slider.children().first().show();
	

	$nextButton.click(function() {	
	$slider.children().last().after($slider.children().first());
	$slider.children().last().hide();
	$slider.children().first().fadeIn();
	});
	
	
	$prevButton.click(function() {
			
			$slider.children().first().hide();

			$slider.children().first().before($slider.children().last());
			$slider.children().first().fadeIn();
	});
	
};