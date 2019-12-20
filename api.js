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

    let API_KEY = "Gd5eoflEUsh86GChsCBNO8I0U4GbTzWE";
    let queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="
        + search.replace(" ", "+")
        + "&begin_date=" + startDate
        + "&end_date=" + endDate
        + "&api-key=" + API_KEY;

    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then(function (response) {
        // Parse response here
        console.log(response);
        let results = response.response.docs;
        let articleDiv = $(".topArticles");
        articleDiv.empty();
        for (let i = 0; i < limit; i++) {
            console.log("Creating result", i);
            let headline = results[i].headline.main;
            let by = results[i].byline.original;
            // let url = results[i].web_url;
            let resultDiv = $("<div>").addClass("result");
            let titleRow = $("<div>").addClass("title-row");
            let index = $("<div>").addClass("index").text(i + 1);
            let title = $("<div>").addClass("title").text(headline);
            let author = $("<div>").addClass("author").text(by);
            titleRow.append(index);
            titleRow.append(title);
            resultDiv.append(titleRow);
            resultDiv.append(author);
            articleDiv.append(resultDiv);
        }
    });
}
