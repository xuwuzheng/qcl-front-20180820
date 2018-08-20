<template>
	<section class="content-wrap">
		<v-search @search="Search"></v-search>
		<!-- <div class="spanname"><a>请输入提供的cookie进行搜索查询,例如:JSESSIONID=82412993FAF288C6339C457ACCA7D373</a></div> -->
		<v-table :thead="thead" :list="rentList" ></v-table>
	</section>
</template>

<script>
import Searchbar from './Searchbar'
import Table from './TableDoc'

export default {
	components: {
		'v-search': Searchbar,
		'v-table': Table
	},
	data() {
		return {
			rentList: '',
			thead: ['编号', '标题', '内容类型', '分类', '作者', '访问数', '热度', '好评', '差评', '评价', '评论数']
		}
	},
	created() {
		// this.Search()
	},
	methods: {
		Search(keyword) {
			this.$http.post(this.$CONSTANTS.APIDoc +'getDoc',{
				cookie: keyword
			}).then((res) => {
				if(res.body.code == 200){
					this.rentList = res.body.data;
				}
			})
		}
	},
	
}
</script>

<style scoped>
section.content-wrap{
	position: relative;
}
.center-search{
	position: absolute;
	left: 30%;
	/* transform: translateX(-50%); */
}
.spanname{
	position: absolute;
	top: 28px;
	left: 32%;
	/* transform: translateX(-50%); */
}

</style>