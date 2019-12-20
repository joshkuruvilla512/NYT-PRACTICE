
// Get Result Data and update the HTML
function setResults(searchTerm, numResults, startYear, endYear) {
    let results = getArticleInfo(searchTerm, numResults, startYear, endYear);

    // Update the HTML with the result Data from
    let articleDiv = $("#articlesDiv");
    articleDiv.empty();
    for (let i=0; i<results.length; i++) {
        let resultDiv = $("<div>").addClass("result");
        let titleRow = $("<div>").addClass("title-row");
        let index = $("<div>").addClass("index").text(i+1);
        let title = $("<div>").addClass("title").text(results[i].headline);
        let author = $("<div>").addClass("author").text(results[i].author);
        titleRow.append(index);
        titleRow.append(title);
        resultDiv.append(titleRow);
        resultDiv.append(author);
        articleDiv.append(resultDiv);
    }
}


