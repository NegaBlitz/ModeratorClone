var Series = function(title, description, author, statements) {
	this.title = title;
	this.description = description + " here's a random number: " + (Math.random()*100);
	this.author = author;
	this.statements = statements; // A bunch of statements go here
}

var series1 = new Series("Title 1", "Description", "Author", "Statements Objects Array 1");
var series2 = new Series("Title 2", "Different Description", "Different Author", "Statements Objects Array 2");
var series3 = new Series("Title 3", "Description", "Author", "Statements Objects Array 3");
var series4 = new Series("Title 4", "Different Description", "Different Author", "Statements Objects Array 4");

var allSeries = [series1, series2, series3, series4];