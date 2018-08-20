<template>
	<section class="content-wrap">
		<v-search @search="Search"></v-search>	
		<div class="pagebutton">
			<a class="pa" @click="prevpage()" >上一页</a>
			<a class="pa" @click="nextpage()" >下一页</a>
		</div>
		<div class="button" @click="addRent()">新增类型</div>
		<v-table :thead="thead" :list="categoryList" @deleted="deleted" @updatecategory="updatecategory"></v-table>

		<transition name="fade">
			<div v-show="addInfoShow" class="addInfo">
				<div class="addInfo-wrapper">
					<div class="addInfo-main">
						<div class="from-wrap">
							<div class="ipunt-wrap">
								<label for="">类目名称:</label>
								<input type="text" v-model="categoryName">
							</div>
							<div class="ipunt-button">
								<a class="gv" href="javascript:;" @click="updataInfo()">添加</a>
							</div>
						</div>
					</div>
					<div class="addInfo-close" @click="closeAddInfo()"> x </div>
				</div>
			</div>
		</transition>
	</section>
</template>

<script>

import Searchbar from './Searchbar'
import Table from './CategoryTable'

export default {
	
	data() {
		return {
			addInfoShow: false,
			categoryList: '',
			categoryName: '',
			custhead: ['编号','类目名称'],
			adminthead: ['编号','类目名称', '操作'],
			pagenum:1,
			isFirstPage:false,
			isLastPage:false,
			keyword:null
		}
	},
	components: {
		'v-search': Searchbar,
		'v-table': Table
	},
	computed: {
		thead() {
			if (sessionStorage.userPhone) {
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
				this.$http.post(this.$CONSTANTS.APICategory +'deleteCategory',{
					id:id
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
		Search(keyword) {
			this.$http.post(this.$CONSTANTS.APICategory +'queryCategory',{
				queryKey:keyword,
				page:this.pagenum,
				pageSize:13
			}).then((res) => {
				if(res.body.code == 200){
					this.categoryList = ''
					this.categoryList = res.body.data.list
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
		updatecategory(id,name){
			console.log("click");
			this.id = id,
			this.categoryName = name
			this.addRent()
		},
		addRent() {
			this.addInfoShow = true
		},
		closeAddInfo() {
			this.addInfoShow = false
		},
		updataInfo() {
			if (!this.categoryName) {
				alert('请填写完整')
				return
			}
			this.$http.post(this.$CONSTANTS.APICategory +'addCategory',{
				id:this.id,
				name:this.categoryName
			}).then((res) => {
				if(res.body.code == 200){
					this.addInfoShow = false
					this.Search(this.keyword);
				} else {
					alert('添加失败')
				}
			})
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
	}
}
</script>

<style scoped>
section.content-wrap{
	position: relative;
}
section.content-wrap .button{
	position: absolute;
	top: 20px;
	left: 60%;
	width: 120px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	padding: 8px 20px;
	/* margin: 30px 0; */
	font-size: 20px;
	border-top: 1px solid #fff;
	border-bottom: 1px solid #fff;
	cursor: pointer;
}
section.content-wrap .pagebutton{
	position: absolute;
	padding-top: 30px;
	left: 40%;
}
.pa{
	cursor: pointer;
	display: block;
	float: left;
}
.page-wrap{
	position: absolute;
	top: 450px;
	left: 50%;
	transform: translateX(-50%);
}
.page-wrap ul li{
	list-style: none;
	float: left;
	width: 40px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	border: 1px solid rgba(255, 255, 255, 0.2);
	margin-right: 5px;
}
.page-wrap ul li:hover{
	background: #fff;
	color: rgba(7,17,27,0.96);
}


.addInfo{
	position: fixed;
	top: 0;
	left: 0;
	/* z-index: 1000; */
	width: 100%;
	height: 100%;
	overflow: auto;
	backdrop-filter: blur(10px);
	transition: all 0.5s;
	background: rgba(7,17,27,0.9);
}
.addInfo.fade-enter-active,.addInfo.fade-leave-active{
	opacity: 1;
}
.addInfo.fade-enter,.addInfo.fade-leave-active{
	opacity: 0;
}
.addInfo-wrapper{
	min-height: 100%;
	width: 100%;
}
.addInfo-main{
	/* margin-top: 44px; */
	padding-bottom: 150px;
}			
.addInfo-close{
	position: relative;
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid #fff;
    margin: 0px auto 0 auto;
    clear: both;
    font-size: 16px;
    cursor: pointer;
}

.gv {
	text-decoration: none;
    background: url('../assets/images/nav_gv.png') repeat 0px 0px;
    width: 130px;
    height: 43px;
    display: block;
    text-align: center;
    line-height: 43px;
    cursor: pointer;
    float: left;
    margin: 10px 2px 10px 2px;
    font: 18px/43px 'microsoft yahei';
    color: #066197;
}
a.gv:hover { 
	background: url('../assets/images/nav_gv.png') repeat 0px -43px; 
	color:#1d7eb8;
	-webkit-box-shadow: 0 0 6px #1d7eb8;
	transition-duration: 0.5s;
}
.from-wrap{
	padding-left: 450px;
	margin-top: 100px;
}
.ipunt-wrap label{
	width: 100px;
	text-align: center;
	display: inline-block;
}
.ipunt-wrap input{
	border: none;
	outline: none;
	background: none;
	border-bottom: 1px solid #fff;
	margin-bottom: 30px;
	width: 300px;
	height: 30px;
	line-height: 30px;
	color: #fff;
	font-size: 18px;
	padding: 0 5px;
}
.ipunt-button {
    margin-left: 150px
}
</style>