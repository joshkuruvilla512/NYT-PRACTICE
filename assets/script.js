
// Get Result Data and update the HTML
function setResults(searchTerm, numResults, startYear, endYear) {
    getArticleInfo(searchTerm, parseInt(numResults), parseInt(startYear), parseInt(endYear));
}

// Event Listener
$("#searchbtn").on("click", function (event) {
    console.log("IN SEARCH");
    // Prevent default on button click
    event.preventDefault();

    // Here we grab the input from the input boxes
    var searchTerm = $("#searchTerm").val();
    var searchNumber = $("#searchNumber").val();
    var start = $("#start").val();
    var end = $("#end").val();

    setResults(searchTerm, searchNumber, start, end);
});

$("#clearbtn").on("click", function(event){
    event.preventDefault();
    $("#results-heading").text("");
    $(".topArticles").empty();
});