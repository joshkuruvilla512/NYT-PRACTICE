function getArticleInfo(search, limit, startYear, endYear) {

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
                headline: results[i].headline.main,
                author: results[i].byline.original,
                url: results[i].web_url,
            });
            
            //console.log("HEADLINE = ", results[i].headline.main);
            //console.log("BY = ", results[i].byline.original);
            //console.log("URL = ", results[i].web_url);
            // Break the loop once we have enough results;
            if (ret.length == limit) {
                break;
            }
        }
        return ret;
    });
    return null;
}
