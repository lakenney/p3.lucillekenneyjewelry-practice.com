/*-------------------------------------------------------------------------------------------------
Reverse submit
-------------------------------------------------------------------------------------------------*/	
$('#process-btn').click(function() {
    $.ajax({
        type: 'POST',
        url: 'process.php',
        success: function(response) { 

            // Enject the results received from process.php into the results div
            $('#results').html(response);
        },
        data: {
            name: $('#name').val(),
        },
    }); // end ajax setup
});