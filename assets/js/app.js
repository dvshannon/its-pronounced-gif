var topics = ['shiba', 'touchdown', 'rocket league', 'frisbee'];

function previewGif() {
    $('#gif-dumpster').empty();

    console.log(this, 'this')
    var gif = $(this).attr('data-gif');
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ gif + "&api_key=X26Ado6ysWrCxS9wmW74PrXH4VrtZusv&limit=10";

// calls api and gets results
    $.ajax({
            url: queryURL,
            method: "GET"
          })
          
          .then(function(response) {
            // stores data in variable
            var results = response.data;

            // new div for gif
            var gifDiv = $('<div>');


            // loops every result
            for (var i = 0; i < results.length; i++){
              // stores gif rating
              var rating = results.data[i].rating;
              // creates p tag for easier wording with rating for gif
              var p = $("<p>").text("Rating: " + rating);

            //   source of url still
              var imageUrl = results[i].images.fixed_width_still.url;

              // Creating an image tag for gif & gives the attribute of still to gifImage
              var topicImage = $("<img>".attr("src", imageURL));
              
              gifDiv.prepend(topicImage);

              // gifs will appear on top of each other as they are loaded in #gif-dumpster
              // Appends the p and topicImage to gifDiv
              $("#gif-dumpster").prepend(gifDiv);
              gifDiv.prepend(p);
            console.log(results.data);
          }
        });
};

function renderButtons() {
    $("#gif-buttons").empty();

    for (var i = 0; i < topics.length; i++){
                var newButton = $('<button>').text(topics[i]);
                $('#gif-buttons').append(newButton);
                console.log(newButton);
            
                newButton.addClass('gifs');
                newButton.attr('data-gif', topics[i]);
    }
}



// 
$('#add-gif').on('click', function(event) {
    // prevents autoload
    event.preventDefault();

    var gifInput = $('#input-gif').val().trim();

    // adds input gif to array of topics
    topics.push(gifInput);

    renderButtons();
});

$(document).on('click', '.gifs', previewGif);






renderButtons();
