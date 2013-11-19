<!DOCTYPE html>
<head>
	<title>Home Remodel Calculator</title>
	<link rel="stylesheet" href="styles.css" type="text/css">
</head>

<body>

	<h1>Home Remodel Calculator</h1>
	
	Your budget: $<input type='text' id='budget'><br><br>
	
	Rooms<br>
	<select id='room_count'>
		<option value='1'>1 Rooms</option>
		<option value='2'>2 Rooms</option>
		<option value='3'>3 Rooms</option>
		<option value='4'>4 Rooms</option>
	</select>
	
	<br><br>
	
	Service (Labor Only)<br> 
	<input type='checkbox' name='services' value='300'>Paint<br>
	<input type='checkbox' name='services' value='350'>Molding<br>
	<input type='checkbox' name='services' value='600'>Flooring<br>
	<input type='checkbox' name='services' value='100'>Fixtures<br>
	<input type='checkbox' name='services' value='500'>Windows<br>
		
	<br><br>
	

	<button>Recalculate</button>
	
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	
	<script>
	
		/*-----------------------------------------------------------------------Listener
		--------------------------------------------------------------------------*/

		// If it's just this function I can pass it to the click listener.
		$('button').click(calculate);


		function calculate() {

			var budget 		= $('#budget').val();
			var rooms 		= $('#room_count').val();
			var services 	= $('input[name=services]:checked');

			//console.log(services);
			services.each(function() {

				console.log($(this).val());

			});
		}


		// A function and other stuff
		// put it all together in an annonymous function
		// to wrap these commands together
		//$('button').click(function() {
		//	calculate();
		//	$('#output');
		//});
		//function calculate() {
		//	console.log('test');
		//}


	

	</script>

<body>