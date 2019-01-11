$("#buttons").on("click", function() {
    var person = $(this).attr("#buttons");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=ZuVJpVcHsX8GNFXpF70yxVoZIWklln69&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $("#gifs-appear-here").prepend(gifDiv);
        }
      });
  });

  var topics = ["Michael Bluth", "Gob Bluth", "Buster Bluth", "Lucille Bluth", "Lindsey Funke", "Tobias Funke"]

  for (var i=0; i<topics.length; i++) {
      var button = $("<button>" + topics[i] + "</button>")
      $("#buttons").append(button);
  }