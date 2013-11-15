$('button').click(function(){

	// Which button was clicked
	var value = $(this).html();
	//console.log(value);



	// If they click = then calculate what's in display
	if(value == '='){
		// Evaluate what's in display div
		var total = eval( $('#display').html() );
		//console.log(total);
			var display = $(this).$('total');

	}
	else {
		$('#display').append(value);
		//console.log(display);

	}

});