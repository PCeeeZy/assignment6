$(document).ready(function(){
    
    // var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
    

    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //     })
    //     .then(function(response) {
    //     console.log(response);
    // });


    // we need an array for each button created--topics
    var topics = ["Pearl Jam", "Foo Fighters", "Kendrick Lamar", "Willie Wonka", "Baby Driver", "Harry Potter"]

    
    // we need a dynamic function to display the buttons---renderButtons
        // for loop through topics[]
            // each topic gets button made--attr class and val
            // append each button

    // on click of #giphyInput
        // push .val().trim() to topics[]
        // renderButtons()

    // function for rendering gifs---renderGiphy
        // take this.val() -- var topic
        // add topic to queryURL
        // AJAX
            // then in #gifDisplay
            // for loop through first 10 JSON
                // <img src="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-still="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-animate="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200.gif" data-state="still" class="gif">
                // each gif gets displayed in stop state
   
    // on click of gif to change state
    //     $(".gif").on("click", function() {
    //   // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    //   var state = $(this).attr("data-state");
    //   // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    //   // Then, set the image's data-state to animate
    //   // Else set src to the data-still value
    //   if (state === "still") {
    //     $(this).attr("src", $(this).attr("data-animate"));
    //     $(this).attr("data-state", "animate");
    //   } else {
    //     $(this).attr("src", $(this).attr("data-still"));
    //     $(this).attr("data-state", "still");
    //   }
    // });





})