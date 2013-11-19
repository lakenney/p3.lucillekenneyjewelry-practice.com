<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.each demo</title>
  <style>
  div {
    color: blue;
  }
  div#five {
    color: red;
  }
  </style>
  <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
</head>
<body>
 
<div id="one"></div>
<div id="two"></div>
<div id="three"></div>
<div id="four"></div>
<div id="five"></div>
 
<script>
/*
Example: Iterates through the array displaying each number as both a word and numeral
*/

var arr = [ "one", "two", "three", "four", "five" ];
var obj = { one: 1, two: 2, three: 3, four: 4, five: 5 };
 
jQuery.each( arr, function( i, val ) {
  $( "#" + val ).text( "Mine is " + val + "." );
 
  // Will stop running after "three"
  return ( val !== "three" );
});
 
jQuery.each( obj, function( i, val ) {
  $( "#" + i ).append( document.createTextNode( " - " + val ) );
});
</script>
 
</body>
</html>