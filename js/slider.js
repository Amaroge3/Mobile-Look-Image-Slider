"use strict" 

window.onload = function(){

var $nextButton = $("#arrowRight"),
	$prevButton = $("#arrowLeft"); 

var $slider = $("#slider");
	
	//hide all the images
	$slider.children().hide();
	
	//show only the first image
	$slider.children().first().show();
	
	/* when the next button is clicked, call moveToNext function */ 
	$nextButton.click(function() {	
		moveToNext($slider);
	});
	
	/* when previous button is clicked, call moveToPrevious function */
	$prevButton.click(function() {
		moveToPrevious($slider);		
	});
/* call function that changes the pointer when hovering over the left and right buttons */
changeToPointerOnButtons();	



};
/* function to show the next image */
function moveToNext(slider){
	slider.children().last().after(slider.children().first());
	slider.children().last().hide();
	slider.children().first().fadeIn();
}
/* function to show the previous image */
function moveToPrevious(slider){
	slider.children().first().hide();
	slider.children().first().before(slider.children().last());
	slider.children().first().fadeIn();
}
/* changes the cursor of the left and right buttons to a pointer when hovering
over the elements */
function changeToPointerOnButtons(){
$('#arrowLeft, #arrowRight').hover(function() {
	$(this).css('cursor', 'pointer');
}, function() {
	$(this).css('cursor', 'auto');
});

}