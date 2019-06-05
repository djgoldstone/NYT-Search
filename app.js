$("#search").on("click", function () {
    event.preventDefault();
    $("#top-articles").empty();
    var search = $("#search-term").val();
    console.log(search);
    var searchNumber = $("#search-number").val();
    var beginDate;
    if ($("#start-year").val() !== "") {
        beginDate = $("#start-year").val();
    }
    else {
        beginDate = "1900"
    }
    var endDate;
    if ($("#end-year").val() !== "") {
        endDate = $("#end-year").val();
    }
    else {
        endDate = "2019"
    }
    console.log($("#start-year").val());
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
            var image = $("<img>");
            image.attr('src', "https://www.nytimes.com/" + article[i].multimedia[0].url);
            image.attr('height', '300px');
            newDiv.append($("<div>").html(image));
            var link = $("<a>");
            link.attr("href", article[i].web_url);
            var linktext = link.text(article[i].web_url);
            newDiv.append($("<div>").html(linktext));
            newDiv.append($("<div>").text(article[i].snippet));
            var date = article[i].pub_date;
            var newDate = date.split('T');
            newDiv.append($("<div>").html("Date: " + newDate[0]));
            newDiv.append($("<br>"));
            $("#top-articles").append(newDiv);
        }
    })
})

$("#clear").on("click", function(){
    event.preventDefault();
    $("#top-articles").empty();
})