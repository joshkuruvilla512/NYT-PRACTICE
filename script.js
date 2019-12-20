let API_KEY="Gd5eoflEUsh86GChsCBNO8I0U4GbTzWE";
let search = "election";
let queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=" + API_KEY;
$.ajax({
    url: queryUrl,
    method: "GET",
}).then(function(response) {
    // Parse response here
    console.log(response);
});