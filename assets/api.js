// search: search term
// limit: 1-10;
// startYear: Year to start looking for articles
// endYear: 
function getArticleInfo(search, limit, startYear, endYear) {
    // If limit not specified set it to default
    if (!limit) {
        limit = 1;
    }

    // If start year not specified set it to default
    if (!startYear) {
        startYear = 2019;
    }

    // If end year not specified set it to default
    if (!endYear) {
        endYear = 2019;
    }

    // Append MMDD to years to get proper date format for NYT
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
        $("#results-heading").text(limit + " result(s) found");
        // Empty the div of previous contents
        articleDiv.empty();
        for (let i = 0; i < limit; i++) {
            buildResult(i, results[i], articleDiv);
        }
    });
}

// Create a single result group div and attach it to the specified div
function buildResult(i, data, attachTo) {
    let headline = data.headline.main;
    let by = data.byline.original;
    let url = data.web_url;
    let resultDiv = $("<div>").addClass("result");
    let titleRow = $("<div>").addClass("title-row");
    let index = $("<div>").addClass("index").text(i + 1);
    let title = $("<a>").addClass("title").text(headline).attr("href", url).attr("target","_blank");
    let author = $("<div>").addClass("author").text(by);
    titleRow.append(index);
    titleRow.append(title);
    resultDiv.append(titleRow);
    resultDiv.append(author);
    attachTo.append(resultDiv);
}
