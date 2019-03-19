// var sourceURL = ;
// X26Ado6ysWrCxS9wmW74PrXH4VrtZusv api key for reference

var topics = ['shiba', 'touchdown', 'rocket league', 'frisbee'];

// function renderButtons() {
//     $("#gif-buttons").empty();

//     var newTopic = $(this).attr('data-newtop')
//     var queryURL = "https://api.giphy.com/v1/gifs/search?=q"+ topics[i] + "&api_key=X26Ado6ysWrCxS9wmW74PrXH4VrtZusv&limit=10";

//     $.ajax({
//       url: renderButtons.queryURL,
//       method: "GET"
//     }).then(function(response) {
//       console.log(response);
//       var stillGif = response.data.rating
//       console.log(response.data.rating);
  
//       var results = response.data;
//     });
  
//     for (var i = 0; i < topics.length; i++){

//         var newButton = $('<button>').text(topics[i]);
//         $('#gif-buttons').append(newButton);
//         console.log(newButton);
    
//         newButton.addClass('gifs');
//     }
    
// };


$('#add-gif').on('click', function(){
    // prevents automatic reload
    // event.preventDefault();
    // assigns data to gif
    var gif = $(this).attr("data-gif");

    // link to api
    var queryURL = "https://api.giphy.com/v1/gifs/search?=q"+ gif + "&api_key=X26Ado6ysWrCxS9wmW74PrXH4VrtZusv&limit=10";

    // calls api and gets results
    $.ajax({
            url: queryURL,
            method: "GET"
          })
          
          .then(function(response) {
            // stores data in variable
            var results = response.data;

            // loops every result
            // for (var i = 0; i < results.length; i++){
              // new div for gif
              var gifDiv = $('<div>');
              // stores gif rating
              var rating = results[i].rating;
              // creates p tag for easier wording with rating for gif
              var p = $("<p>").text("Rating: " + rating);

              var imageUrl = response.data.image_original_url;
              
              // Creating an image tag for gif
              var topicImage = $("<img>");
              // gives the attribute of still to gifImage
              topicImage.attr("src", imageURL);
              // Appends the p and topicImage to gifDiv
              gifDiv.append(p);
              gifDiv.append(topicImage);

              // gifs will appear on top of each other as they are loaded in #gif-dumpster
              $("#gif-dumpster").prepend(gifDiv);
            console.log(response.data);
          // }
        });
      });
              // var newButton = $('<button>').text(topics[i]);
              // $('#gif-buttons').append(newButton);
              // console.log(newButton);
          
              // newButton.addClass('gifs');




            // var gifThatWasInput = $("#input-gif").val().trim();

            // console.log(response);
            // var stillGif = response.data.rating
            // console.log(response.data.rating);
    // topics.push(gif);
    
    // renderButtons();





// switches gif state from still to running
// $(".gif").on("click", function() {
//   var state = $(this).attr("data-state");
// });