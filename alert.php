<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>script element</title>
  <style>
  	div {
  		width: 50px;
  		height: 50px;
  		border:1px solid black;
  	}
  
  	#lucy {
  		background-color:red;
  	}
   	#ricky {
  		background-color:black;
  	}
 
  </style>
  
  <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
  
</head>

<body>
 	<!--Hello World-->

	<div id='lucy' class='ricardo'></div>
	<div id='ricky' class='ricardo'></div>


<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
 
	<script>

	
	//$('.color').click(function(){
	
	//	var color_that_was_clicked = $(this).css('background-color');
		
	//}
	
		$('#lucy').click(function() {

			.css('border','1px solid blue');
			//	console.log("Lucy was clicked!")

		});
	
		

		//document.getElementById("lucy").style.backgroundColor = 'purple';
		//document.getElementById('lucy').style.width = '500px';
		//$('#lucy').css('background-color','purple');
		//$('#lucy').css('border','3px solid red');
		
		//$('body').css('background-color','yellow');
		//$('div').css('background-color','green');
		//$("div").remove('#lucy, #ricky');
		$('#lucy').click(function(){ 

			//alert('Hello world!');
			console.log('Lucy was clicked.');

		});

		//document.getElementById("lucy").style.width = '500px';

		//alert('Hello World');
		//console.log("Testing?!");
		//var age = 15;
		//console.log("The user's age is:" + age);
	</script>

</body>
</html>