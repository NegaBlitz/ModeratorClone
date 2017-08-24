// Series template
Vue.component('series', {
	props: ['seriesTitle', 'seriesDescription', 'seriesAuthor', 'seriesStatements'],
	template: `
						<div class="row">
							<div class="col-md-12">
								<h2>{{ seriesTitle }}</h2>
								<p>{{ seriesDescription }}</p>
							</div>
						</div>
						`
})