<!DOCTYPE html>

<html>

<head>

</head>

<body>

	<form>
    	<label for='name'>Enter your name:</label><br>
    	<input type='text' id='name' name='name'>

        <button>Submit</button>
        <div id='response'></div>
    </form>

    <br><br>

    <input type='button' id='process-btn' value='Reverse it!'>

    <div id='results'></div>

	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript" src="../ajax/js/form.js"></script>
    <script type="text/javascript" src="../ajax/js/jquery.form.js"></script>

    <script>

    	var options = {
    		type: 'post',
    		url: 'process.php',
    		success: function(response) {
    			$('#response').html(response);
    		}
    	};

    	$('form').ajaxForm(options);

    	/*
    	$('button').click(function(){

    		$.ajax(
    			{
    				type:'POST',
    				url: 'process.php',
    				// success option will automatically feed to the function attached to success what the results are.
    				success: function(response) {
    					console.log(response);
    					$('#output').html(response);
    				},
    				data: {
    					name: $('#name').val()
    				}
    			}
    		);
    	});
		*/
    </script>

    

</body>
</html>