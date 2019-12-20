// search: search term
// limit: 1-10;
// startYear: Year to start looking for articles
// endYear: 
function getArticleInfo(search, limit, startYear, endYear) {
    if (!limit) {
        limit = 1;
    }
    if (!startYear) {
        startYear = 2019;
    }
    if (!endYear) {
        endYear = 2019;
    }

    let startDate = startYear + "0101";
    let endDate = endYear + "1231";

    let API_KEY="Gd5eoflEUsh86GChsCBNO8I0U4GbTzWE";
    let queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" 
        + search.replace(" ", "+") 
        + "&begin_date=" + startDate
        + "&end_date=" + endDate
        + "&api-key=" + API_KEY;

    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then(function(response) {
        // Parse response here
        console.log(response);
        let results = response.response.docs;
        let ret = [];
        for(let i=0; i<results.length; i++) {
            ret.push({
                headline:   results[i].headline.main,
                author:     results[i].byline.original,
                url:        results[i].web_url,
            });      
            // Break the loop once we have enough results;
            if (ret.length == limit) {
                break;
            }
        }
        return ret;
    });
    return [];
}
