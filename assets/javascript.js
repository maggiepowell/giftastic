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


//grab button clicked and search giphy for that character 
$("button").on("click", function() {
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

          var image = $("<img>");
          image.attr("src", results[i].images.fixed_height_still.url);
          image.attr("data-still", results[i].images.fixed_height_still.url);
          image.attr("data-animate", results[i].images.fixed_height.url);
          image.attr("data-state", "still");
          image.attr("class", "image");
          gifDiv.append(image);
          gifDiv.append(p);

          $("#gifs-appear-here").append(gifDiv);
        }

    //code for animated and static gifs
    $('#gifs-appear-here img').on('click', function () {
      var state = $(this).attr("data-state");
      
          if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
          console.log(state);

        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
          console.log(state);
        }
      });
    });
  });


  });

//need to take value from user input box and add to button array
//make a function call that takes each topic in the array remakes the buttons on the page