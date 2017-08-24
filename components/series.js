// Series template
Vue.component('series', {
	props: ['seriesTitle', 'seriesDescription', 'seriesAuthor', 'seriesStatements'],
	template: `
						<div class="row">
							<div class="col-md-12">
								<h2>{{ seriesTitle }} by {{ seriesAuthor }}</h2>
								<p>{{ seriesDescription }}</p>
								<statement
								:statement = seriesStatements></statement>
							</div>
						</div>
						`
})

Vue.component('statement', {
	props: ['statement'],
	template: `<p>{{ statement }}</p>`
})