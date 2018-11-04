# assignment6

This felt a bit simpler than the past assignment.
I had minor struggles with the javascript.  I ran into the dynamic page creation and needing to change how my on click events are written.  Thanks to the last assignment this was a quick issue to resolve.

<-------------------------------Trouble Spots-----------------------

Despite knowing the on click events needed to be formatted differently. I still had a different issue regarding them.

Originally I had:

    $(document).on("click", ".giphyCall", function() {
    // $(".giphyCall").on("click", function(){
        $("#gifDisplay").empty();
        renderGifs();
    })

This called on renderGifs to be run.  However the $(this).val() had issue with it properly grabbing correct object and returned an error in the debugger.

The solution was to:

    $(document).on("click", ".giphyCall", renderGifs)

This makes renderGifs run as a function and not a method, correcting the object correlation for $(this).val()


~~~~~~~~~

Another issue was regarding the stopping of duplicate topics.

I used a for loop originally to check for inclusion.
Alaa turned me on to a better way which is just to use the .includes() command.

-------------------------------------------------

Big shot outs to Jon and Alaa for helping me get this javascript working smoothly.