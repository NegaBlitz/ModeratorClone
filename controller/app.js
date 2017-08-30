// Main controller
var app = new Vue({
  el: '.main',
  data: {
		view: 'Series',
		adminSeriesTitle: "",
		adminSeriesDescription: "",
		adminSeriesOwners: "",
		allSeries: allSeries
	},
	methods: {
		changeView(newView) {
			app.view = newView;
		},
		addSeries: function(title, description, owners) {
			allSeries.push(new Series(title, description, owners, []));
			app.changeView('Series');
			app.adminSeriesTitle = "";
			app.adminSeriesDescription = "";
			app.adminSeriesOwners = "";
		},
		toggleStatementsVisible: function(series) {
			series.hideStatements = !series.hideStatements;
		},
		addStatement: function(series, statementText, author) {
			series.statements.push(new Statement(statementText, author, 0));
		},
		incScore: function(statement) {
			statement.score++;
		},
		decScore: function(statement) {
			statement.score--;
		}
	}
});

//app.view = "Login";