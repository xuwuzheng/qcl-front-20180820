<template>
	<section class="content-wrap">
		<!-- <v-search @search="Search"></v-search>	
		<div class="pagebutton">
			<a class="pa" @click="prevpage()" >上一页</a>
			<a class="pa" @click="nextpage()" >下一页</a>
		</div> -->
		<div class="button" @click="addRent()">添加信息</div>
		<!-- <v-table :thead="thead" :list="knowledgeList" @deleted="deleted" @updatedoc="updatedoc"></v-table> -->
		
		<transition name="fade">
			<div v-show="addInfoShow" class="addInfo">
				<div class="addInfo-wrapper">
					<div class="addInfo-main">
						<div class="from-wrap">
							<!-- '昵称', '性别', '图片', '介绍', '标签', '爱好' -->
							<div class="ipunt-wrap">
								<label for="">昵称:</label>
								<textarea  type="text" placeholder="" autofocus v-model="nike"></textarea>
							</div>
							<div class="ipunt-wrap">
								<label for="">性别:</label>
								<select v-model="sex">
									<option :value="0">男</option>
									<option :value="1">女</option>
								</select>
								<!-- <input type="select" v-model="rprice"> -->
							</div>
							<div class="ipunt-wrap">
								<label for="">介绍:</label>
								<textarea  type="text" placeholder="" autofocus v-model="detail"></textarea>
							</div>
							<div class="ipunt-wrap">
								<label for="">标签:</label>
								<textarea  type="text" placeholder="" autofocus v-model="tag"></textarea>
							</div>
							<div class="ipunt-wrap">
								<label for="">爱好:</label>
								<textarea  type="text" placeholder="" autofocus v-model="property"></textarea>
							</div>
							<div class="ipunt-wrap" v-show="admin">
								<label for="">流行指数:</label>
								<textarea  type="text" placeholder="0" autofocus v-model="popular"></textarea>
							</div>
							<div class="ipunt-wrap" v-show="admin">
								<label for="">喜欢指数:</label>
								<textarea  type="text" placeholder="0" autofocus v-model="likeNumber"></textarea>
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

export default {
	components: {
	},
	data() {
		return {
			addInfoShow: false,
			nike:'',
			sex:'',
			detail:'',
			tag:'',
			property:'',
			popular:0,
			likeNumber:0,
			admin:false
		}
	},
	filters: {
	},
	computed: {
		thead() {
			if (sessionStorage.sb == "false") {
				this.admin=true
				return this.adminthead
			} else {
				this.admin=false
				return this.custhead
			}
		}
	},
	created() {
		
	},
	methods: {
		closeAddInfo() {
			this.addInfoShow = false
		},
		addInfo() {
			if (!this.nike || !this.sex  || !this.detail || !this.tag || !this.property) {
				alert('请填写完整')
				return
			}
			this.$http.post(this.$CONSTANTS.APILover +'addLover',{
				nike:this.nike,
				sex:this.sex,
				detail:this.detail,
				tag:this.tag,
				property:this.property,
				popular:this.popular,
				likeNumber:this.likeNumber,
				userToken:sessionStorage.userToken
			}).then((res) => {
				if(res.body.code == 200){
					this.closeAddInfo()
				} else {
					alert('添加失败')
				}
			})
		},
		addRent(){
			this.addInfoShow = true
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
	left: 10%;
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