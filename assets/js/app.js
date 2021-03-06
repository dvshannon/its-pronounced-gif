var topics = ['shiba', 'touchdown', 'rocket league', 'frisbee'];


function giphy() {
    $('#gif-dumpster').empty();

    console.log(this, 'this');
    var topics = $(this).attr("data-gif");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ topics + "&api_key=X26Ado6ysWrCxS9wmW74PrXH4VrtZusv&limit=10";

// calls api and gets results
    $.ajax({
            url: queryURL,
            method: "GET"
          })
          
          .then(function(response) {

            console.log(response);

            // stores data in variable
            var results = response.data;

            // loops every result
            for (var i = 0; i < results.length; i++){
                
              // stores gif rating
              var rating = results.rating;

              // creates p tag for easier wording with rating for gif
            //   var p = $("<p>").text("Rating: " + rating);

              // Creating an image tag for gif & gives the attribute of still to gifImage
              var topicImage = $("<img>").attr("src", results[i].images.fixed_width.url);
              topicImage.attr('data-state', 'still');
            //   topicImage.attr('title', "Rating: "+ topicImage[i].rating);
              topicImage.addClass('gifs');
              $("#gif-dumpster").prepend(topicImage);

              // gifs will appear on top of each other as they are loaded in #gif-dumpster
              // Appends the p and topicImage to gifDiv
            //   $("#gif-dumpster").prepend(gifDiv);
            // gifDiv.prepend(p);

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



// enters gif input and value into array of topics
$('#add-gif').on('click', function(event) {
    // prevents autoload
    event.preventDefault();

    var gifInput = $('#input-gif').val().trim();
    topics.attr('data-state', 'still');
    topics.addClass('gifs');
    // adds input gif to array of topics
    topics.push(gifInput);

    renderButtons();
});

$(document).on('click', '.gifs', giphy);




// switches gif state from still to running
$(".gifs").on("click", function() {
  var state = $(this).attr("data-state");
  
  if (state === "still") {

    var imageIClickedOn = $(this);
    // Get the value of the data-animate attribute on the img I clicked on
    var animatedURL = imageIClickedOn.attr("data-animate");

    // Set the src attribute on the img I clicked on
    imageIClickedOn.attr("src", animatedURL);

    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } 
  
  else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }

});





renderButtons();
