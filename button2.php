<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Hello World</title>
 
    <!-- CSS for presentation. -->
    <style>
    h1 { font-size: 14px; color: hotpink; }
    button { color: red; }
    </style>
</head>
<body>
    <h1>Hello World</h1>
    <button>Click Me!</button>
 
    <!-- JavaScript for interactivity. -->
    <script>
 
    // Get a handle on the first button element in the document.
    var button = document.querySelector( "button" );
 
    // If a user clicks on it, say hello!
    button.addEventListener( "click", function( ev ) {
        alert( "Hello" );
    }, false);
 
    </script>
</body>
</html>