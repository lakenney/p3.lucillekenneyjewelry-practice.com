<!DOCTYPE html>
<head>
</head>
<body>
<form>
    <label for='name'>Enter your name:</label><br>
    <input type='text' id='name' name='name'><br><br>
    <input type='submit' value='Reverse It!'>       
</form>

<!--You'll put the results in this empty div -->
<div id='results'></div>



    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
   	<script type="text/javascript" src="../ajax/js/jquery.form.js"></script>

    <script>


    	var option + {
    		type: 'post',
    		url: 'process.php',
    		success: function(response) {
				$('#response').html(response);

    		}
    $('form').ajaxForm(options);
    	};

	/*$('button').click(function() {

    	$.ajax({
        	type: 'POST',
        	url: 'process.php',
        	beforeSend: function() {
            	// Display a loading message while waiting for the ajax call to complete
            	$('#results').html("Loading...");
        	},
        	success: function(response) { 
                	// Load the results we get back from process.php into the results div
            	$('#results').html(response);
        	},
        	data: {
            	name: $('#name').val(),
        	},
    	}); // end ajax setup

	}); // end process-btn wiring*/

    </script>
</body>
</html>