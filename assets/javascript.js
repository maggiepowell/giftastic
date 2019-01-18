$(document).ready(function() {

var topics = ["Michael Bluth", "Gob Bluth", "Buster Bluth", "Lucille Bluth", "Lindsey Funke", "Tobias Funke"];
//create buttons dynamically
for (var i=0; i<topics.length; i++) {
    var button = $("<button>");
    button.attr("data-show", topics[i]);
    button.attr("data-person", topics[i]);
    button.text(topics[i]);
    $("#buttons").append(button);
  };


//grab button clicked and search giphy for that character **NOT WORKING!!!!!!!
$("#buttons").on("click", function() {
    var person = $(this).attr("data-person");
    console.log($(this));
    console.log($(this)[0]);   
    console.log(person);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=ZuVJpVcHsX8GNFXpF70yxVoZIWklln69&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;
        console.log(results);

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          //var gif = $("<img>");
          //gif.attr("src", results[i].images.fixed_height.url);

          var image = $("<img>");
          image.attr("src", results[i].images.fixed_height_small_still.url);

          gifDiv.prepend(p);
          //gifDiv.prepend(gif);
          gifDiv.prepend(image);

          $("#gifs-appear-here").prepend(gifDiv);
        }
      });
  });


//class code for animate and static gifs
//$(".gif").on("click", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
//    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
//    if (state === "still") {
//      $(this).attr("src", $(this).attr("data-animate"));
//      $(this).attr("data-state", "animate");
//    } else {
//      $(this).attr("src", $(this).attr("data-still"));
//      $(this).attr("data-state", "still");
//    }
//  });


  });