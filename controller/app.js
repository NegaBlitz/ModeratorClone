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
		addSeries: function(title, description, owners) {
			allSeries.push(new Series(title, description, owners, []));
		},
		addStatement: function(series, statementText, author) {
			series.statements.push(new Statement(statementText, author, 0));
		}
	}
});

//app.view = "Login";