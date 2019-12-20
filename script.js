getArticleInfo("election", 1, 2017, 2017);

// Event Listener
$("#searchBtn").on("click", function (event) {

    // Prevent default on button click
    event.preventDefault();

    // Here we grab the input from the input boxes
    var searchTerm = $("#searchTerm").val();
    var searchNumber = $("#searchNumber").val();
    var start = $("#start").val();
    var end = $("#end").val();

    // Query starts here
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $("#movie-view").text(JSON.stringify(response));
    });
