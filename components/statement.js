Vue.component('statement', {
	props: ['statement', 'statementText', 'statementAuthor','statementScore', 'incScore', 'decScore'],
	template:	`	
						<div class="row statement-block">
							<div class="col-md-1">
								<p v-on:click="incScore(statement)" class="up-vote-button">+</p>
								<p v-on:click="decScore(statement)" class="down-vote-button">-</p>
							</div>
							<div class="col-md-11">
								<h4>{{ statementText }}</h4>
								<p>{{ statementAuthor }}</p>
								<p>Score: {{ statementScore }}</p>
							</div>
						</div>`
})