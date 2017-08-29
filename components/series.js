// Series template
Vue.component('series', {
	props: ['series', 'seriesTitle', 'seriesDescription', 'seriesAuthor', 'seriesStatements', 'addStatement', 'statementInput'],
	template: `
						<div class="row">
							<div class="col-md-12">
								<h2>{{ seriesTitle }} by {{ seriesAuthor }}</h2>
								<p>{{ seriesDescription }}</p>
								<input v-model="statementInput" ></input>
								<input type="submit" value="Statement" v-on:click="addStatement(series, statementInput, 'Author')">
								<statement
								v-for="statement in seriesStatements"
								:statement-text = statement.text
								:statement-author = statement.author
								:statement-score = statement.score></statement>
							</div>
						</div>
						`
})

Vue.component('statement', {
	props: ['statementText', 'statementAuthor','statementScore'],
	template:	`	
						<div>
							<h4>{{ statementText }}</h4>
							<p>{{ statementAuthor }}</p>
							<p>Score: {{ statementScore }}</p>
						</div>
						`
})