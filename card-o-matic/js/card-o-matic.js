$('.colors').click(function() {

	var color_that_was_clicked = $(this).css('background-color'); 

	//console.log(color_that_was_clicked);
	$('#canvas').css('background-color', color_that_was_clicked);
	//console.log('You clicked colors!');

});

$('.textures').click(function(){

	var texture_that_was_clicked = $(this).css('background-image');
	$('#canvas').css('background-image', texture_that_was_clicked);
	//console.log(texture_that_was_clicked);

});