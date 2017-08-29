var Series = function(title, description, author, statements) {
	this.title = title;
	this.description = description + " here's a random number: " + (Math.random()*100);
	this.author = author;
	this.statements = statements; // A bunch of statements go here
}

var allSeries = [];