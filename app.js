var search = "Trump";
var searchNumber = 5;
var beginDate = "1900";
var endDate = "2017";
// begindate = $("#beginDate").val();
// endDate = $("#endDate").val();
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&begin_date=" + beginDate + "0101&end_date=" + endDate + "1231&api-key=2Ah00rNAOIvNwpN87GOjw1GGNpLrxnnR";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (result) {
    var article = result.response.docs;
    console.log(result.response);
    for (var i = 0; i < searchNumber; i++) {
        var newDiv = $("<div>");
        newDiv.append($("<div>").text(article[i].headline.main));
        var link = $("<a>");
        link.attr("href",article[i].web_url);
        var linktext = link.text(article[i].web_url);
        newDiv.append($("<div>").html(linktext));
        newDiv.append($("<div>").text(article[i].snippet));
        var date = article[i].pub_date;
        var newDate = date.split('T');
        newDiv.append($("<div>").text("Date: " + newDate[0]));
        $("#top-articles").append(newDiv);
    }
})