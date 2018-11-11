$(document).ready(function(){
    

// ********************GLOBAL VARIABLES**********************************

    // we need an array for each button created--topics
    var topics = ["Pearl Jam", "Foo Fighters", "Kendrick Lamar", "Willie Wonka", "Baby Driver", "Harry Potter"]

// *************************FUNCTIONS*************************************

    // we need a dynamic function to display the buttons---renderButtons
        // for loop through topics[]
            // each topic gets button made--attr class and val
            // append each button

    function renderButtons() {
        $(".containerBtn").empty();
        for(var i=0; i<topics.length; i++) {
            var newBtn = $(`<button class="btn giphyCall"></button>`);
            newBtn.attr("data-name", topics[i]);
            newBtn.attr("value", topics[i]);
            newBtn.text(topics[i]);
            $(".containerBtn").append(newBtn);
        }
    }

    // on click of #giphySubmit
        // push .val().trim() to topics[]
        // dont want repeats or default
        // renderButtons()

    $("#giphySubmit").on("click", function(makeBtn) {
        makeBtn.preventDefault();
        var topic = $("#giphyBtnMkr").val().trim();
        $("#giphyBtnMkr").val("").attr("placeholder", "Any Topic Here");
        if (topics.includes(topic)) {
            alert("That's already a topic! Add a new topic");
            return false;
        };
        topics.push(topic);
        renderButtons();
    })

    // function for rendering gifs---renderGifs
        // take this.val() -- var topic
        // add topic to queryURL- "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC";    
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //     })
    //     .then(function(response) {
    //     console.log(response);
    // });
        // then in #gifDisplay
        // for loop through first 10 JSON
            // each gif gets displayed in stop state

            // important json directions
            // .data[i].rating----rating of Gif
            // .data[i].images.original.url----Animated gif
            // .data[i].images.original_still.url----Still gif
    function renderGifs() {
        var searchTopic = $(this).val();
        console.log(searchTopic);
        var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=${searchTopic}`;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(result) {
            console.log(result);
            for (var i=0; i<10; i++) {
                console.log(`Rating of gif#${i}: ${result.data[i].rating}`);
                var gifMaker = $("<img>");
                var rating = result.data[i].rating;
                var newGif = result.data[i].images.original.url;
                var stillGif = result.data[i].images.original_still.url;
                gifMaker.attr("src", stillGif);
                gifMaker.attr("data-still", stillGif);
                gifMaker.attr("data-animate", newGif);
                gifMaker.attr("data-state", "still");
                gifMaker.addClass("gif");
                $("#gifDisplay").prepend(gifMaker);
                $("#gifDisplay").prepend(rating);
            }
        })
    };

    // ON CLICK FUNCTIONS
        // click a topic button
    $(document).on("click", ".giphyCall", renderGifs);

        // click on a gif
    $(document).on("click", ".gif", function(){
        var state = $(this).attr("data-state");
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
    })

    renderButtons();





})