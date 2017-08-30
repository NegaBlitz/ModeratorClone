// Series template
Vue.component('series', {
	props: ['series', 'seriesTitle', 'seriesDescription', 'seriesAuthor', 'seriesStatements', 'addStatement', 'statementInput', 'incScore', 'decScore', 'hideStatements', 'toggleStatementsVisible'],
	template: `
						<div class="row">
							<div class="col-md-12">
								<h2>{{ seriesTitle }} by {{ seriesAuthor }}</h2>
								<p>{{ seriesDescription }}</p>
								<input v-model="statementInput" ></input>
								<input type="submit" value="Add Statement" v-on:click="addStatement(series, statementInput, 'Author')">
								<input type="submit" value="Show Statements" v-on:click="toggleStatementsVisible(series)">
								<statement
								v-if="!hideStatements"
								v-for="statement in seriesStatements"
								:statement = statement
								:statement-text = statement.text
								:statement-author = statement.author
								:statement-score = statement.score
								:inc-score = incScore
								:dec-score = decScore></statement>
							</div>
						</div>
						`
})