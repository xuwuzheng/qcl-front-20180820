<template>
	<section class="content-wrap">
		<v-search @search="Search"></v-search>	
		<div class="pagebutton">
			<a class="pa" @click="prevpage()" >上一页</a>
			<a class="pa" @click="nextpage()" >下一页</a>
		</div>
		<div class="button" @click="addRent()">提问</div>
		<v-table :thead="thead" :list="knowledgeList" @deleted="deleted" @updatedoc="updatedoc"></v-table>
		
		<transition name="fade">
			<div v-show="addInfoShow" class="addInfo">
				<div class="addInfo-wrapper">
					<div class="addInfo-main">
						<div class="from-wrap">
							<div class="ipunt-wrap">
								<label for="">标&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;题:</label>
								<textarea  type="text" placeholder="" autofocus v-model="title"></textarea>
							</div>
							<div class="ipunt-wrap">
								<label for="">所属类型:</label>
								<select v-model="category" >
									<option v-for="(item,index) in mCategory"  :value="item.id">{{ item.name }}</option>
								</select>
								<!-- <input type="select" v-model="rprice"> -->
							</div>
							<div class="ipunt-wrap" v-show="admin">
								<label for="">内&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;容:</label>
								<textarea  type="text" placeholder="" autofocus v-model="content"></textarea>
							</div>
							<div class="ipunt-wrap" v-show="admin">
								<label for="">搜索关键词:</label>
								<textarea  type="text" placeholder="" autofocus v-model="pcontent"></textarea>
							</div>
							<!-- 
							<div class="ipunt-wrap">
								<label for="">建筑面积:</label>
								<input type="text" v-model="jarea">
							</div>
							<div class="ipunt-wrap">
								<label for="">装修情况:</label>
								<input type="text" v-model="decoratetype">
							</div>
							<div class="ipunt-wrap">
								<label for="">房屋地址:</label>
								<input type="text" v-model="hadress">
							</div> -->
							<div class="ipunt-button">
								<a class="gv" href="javascript:;" @click="addInfo()">添加</a>
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
			addInfoShow: false,
			knowledgeList: '',
			title: '',
			custhead: ['编号', '标题', '内容', '类型'],
			adminthead: ['编号', '标题', '内容', '类型', '操作'],
			category:'',
			mCategory:'',
			admin:false,
			content:'',
			pagenum:1,
			isFirstPage:false,
			isLastPage:false,
			keyword:null,
			pcontent:''
		}
	},
	filters: {
	},
	computed: {
		thead() {
			if (sessionStorage.userPhone) {
				this.admin=true
				return this.adminthead
			} else {
				this.admin=false
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
				this.$http.post(this.$CONSTANTS.APIDoc +'deleteDoc',{
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
		updatedoc(id,title,content,type,pcontent){
			this.id = id,
			this.title = title,
			this.content = content,
			this.category = type,
			this.pcontent = pcontent,
			this.addRent()
		},
		addRent() {
			this.addInfoShow = true
			this.$http.post(this.$CONSTANTS.APICategory +'queryCategory',{
			}).then((res) => {
				if(res.body.code == 200){
					this.mCategory = res.body.data.list
				} else {
					alert('知识类型获取失败')
				}
			})
		},
		closeAddInfo() {
			this.addInfoShow = false,
			this.id = null,
			this.title = "",
			this.content = "",
			this.category = 0,
			this.pcontent = ''
		},
		addInfo() {
			if (!this.title || !this.category) {
				alert('请填写完整')
				return
			}
			this.$http.post(this.$CONSTANTS.APIDoc +'addDoc',{
				id:this.id,
				title:this.title,
				type:this.category,
				content:this.content,
				pcontent:this.pcontent,
				author:sessionStorage.name
			}).then((res) => {
				if(res.body.code == 200){
					this.closeAddInfo()
					this.Search(this.keyword);
				} else {
					alert('添加失败')
				}
			})
		},
		Search(keyword) {
			this.$http.post(this.$CONSTANTS.APIDoc +'goods',{
				queryKey:keyword,
				page:this.pagenum,
				pageSize:13
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
	width: 600px;
	height: 30px;
	line-height: 30px;
	color: #fff;
	font-size: 18px;
	padding: 0 5px;
}
.ipunt-wrap textarea{
	border: none;
	outline: none;
	background: none;
	border-bottom: 1px solid #fff;
	width: 600px;
	height: 30px;
	line-height: 30px;
	color: #fff;
	font-size: 18px;
	padding: 0 5px;
}
.ipunt-wrap select{
	border: none;
	outline: none;
	background: none;
	border-bottom: 1px solid #fff;
	margin-bottom: 30px;
	width: 150px;
	height: 30px;
	line-height: 30px;
	color: #fff;
	font-size: 18px;
	padding: 0 5px;
}
.ipunt-wrap select option{
	background-color: rgb(241, 168, 32);
}
.ipunt-button {
    margin-left: 150px
}
</style>