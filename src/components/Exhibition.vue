<template>
	<section class="content-wrap">
		<div class="center-search">		
			<v-search @search="Search"></v-search>
		</div>
		<v-table :thead="thead" :list="knowledgeList" @deleted="deleted"></v-table>
		<div class="pagebutton">
			<a class="pa" @click="prevpage()" >上一页</a>
			<a class="pa" @click="nextpage()" >下一页</a>
		</div>
	</section>
</template>

<script>
import Searchbar from './Searchbar';
import Table from './Table';
import Clipboard from 'clipboard';
let clipboard = new Clipboard('.copyBtn');

export default {
	components: {
		'v-search': Searchbar,
		'v-table': Table
	},
	data() {
		return {
			knowledgeList: '',
			custhead: ['编号', '昵称', '性别', '图片', '介绍', '标签', '爱好', '流行指数', '喜欢指数'],
			adminthead: ['编号', '昵称', '性别', '图片', '介绍', '标签', '爱好', '流行指数', '喜欢指数', '操作'],
			pagenum:1,
			isFirstPage:false,
			isLastPage:false,
			keyword:null
		}
	},
	computed: {
		thead() {
			if (sessionStorage.sb=="false") {
				return this.adminthead
			} else {
				return this.custhead
			}
		}
	},
	created() {
		this.Search(this.keyword);
	},
	methods: {
		deleted(id) {
			var r=confirm("确认删除")
			if (r==true){
				this.$http.post(this.$CONSTANTS.APILover +'delLover',{
					id:id,
					userToken:sessionStorage.userToken
				}).then((res) => {
					if(res.body.code == 200){
						this.Search(this.keyword);
					} else {
						alert('删除失败')
					}
				})
			} else {
				return
			}
		},
		Search(keyword,clearpage) {
			if(clearpage==1){
				this.pagenum=1
			}
			this.$http.post(this.$CONSTANTS.APILover +'goods',{
				queryKey:keyword,
				sortKey:"popular desc",
				page:this.pagenum,
				pageSize:11
			}).then((res) => {
				if(res.body.code == 200){
					this.knowledgeList = ''
					this.knowledgeList = res.body.data.list
				} else {
					alert('查询失败')
				}
				if(res.body.data.isFirstPage){
					this.isFirstPage = true
				} else {
					this.isFirstPage = false
				}
				if(res.body.data.isLastPage){
					this.isLastPage = true
				} else {
					this.isLastPage = false
				}
			})
			this.keyword =keyword
		},
		prevpage(){
			if(!this.isFirstPage){
				this.pagenum = this.pagenum - 1;
				this.Search(this.keyword);
			}
		},
		nextpage(){
			if(!this.isLastPage){
				this.pagenum = this.pagenum + 1;
				this.Search(this.keyword);
			}
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
section.content-wrap .pagebutton{
	position: absolute;
	padding-top: 30px;
	left: 60%;
}
.pa{
	cursor: pointer;
	display: block;
	float: left;
}

</style>