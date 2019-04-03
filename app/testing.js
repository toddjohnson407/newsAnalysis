// testing file to run code separately before implementing into project
// @toddjohnson

var dates = ['2019-03-28', '2019-03-05', '2019-03-31'];
var msArray = [];

var testDates = function() {
  for (var i = 0; i < dates.length; i++) {
    var year = parseInt(dates[i].substr(0, 4));
    var month = parseInt(dates[i].substr(5, 2));
    var day = parseInt(dates[i].substr(8));

    var date = new Date(year, month, day);
    var ms = date.valueOf() / 10000000;
    msArray.push(ms);
  }
  console.log(msArray);
}

testDates();

// test variables to check function accuracies --- TESTING PURPOSES ONLY ---
// var testArticleA = "This is a test string to represent the content of an article with sentiment analysis words such as acclaim abuncance and abort abominable and other words such as abrasive or accomplished words."
// var testArticleB = "This is a test string to represent the content of an article with sentiment analysis words such as acclaim abuncance and abort abominable and other words such as abrasive or accomplished words."
// var testArticleC = "This is a test string to represent the content of an article with sentiment analysis words such as acclaim abuncance and abort abominable and other words such as abrasive or accomplished words."

// var testArticles = [testArticleA, testArticleB, testArticleC];
