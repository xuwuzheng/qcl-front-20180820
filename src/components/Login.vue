<template>
	<div id="login" v-show="login">
		<router-link to="/menu">
			<div class="back" @click="back()"></div>			
		</router-link>

		<div class="login-box">
			<div class="logo"></div>
			<form>
				<!-- <div class="ipunt-wrap" v-show="admin">
					<label for="ID" class="icon-id"></label>
					<input type="text" id="phone" placeholder="手机号" v-model="userPassword">
				</div> -->
				<div class="ipunt-wrap">
					<label for="userNo" class="icon-user"></label>
					<input type="text" id="userNo" placeholder="手机号" v-model="userNo">
				</div>
				<div class="ipunt-wrap">
					<label for="userPassword" class="icon-password"></label>
					<input type="password" id="userPassword" placeholder="密码" v-model="userPassword">
				</div>
				<div class="button">
					<a class="gv" href="javascript:;" @click="Login()">登录</a>
				</div>
				<div class="toregist" v-show="customer">
					还没有账号？<router-link to="/regist"><a href="javascript:;">去注册</a></router-link>
				</div>
			</form>
		</div>
		<v-dialog v-show="dialog" :dialog-msg="dialogMsg" @confirm="confirm"></v-dialog>
	</div>
</template>

<script>

import dialog from '@/components/Dialog'
import Vue from 'vue'
const vm = new Vue()

export default {
	components: {
		'v-dialog': dialog
	},
	props: {
		login: {
			type: Boolean
		},
		admin: {
			type: Boolean
		},
		customer: {
			type: Boolean
		}
	},
	data() {
		return {
			userNo: '',
			userPassword: '',
			dialog: false,
			dialogMsg: ''
		}
	},
	
	methods: {
		confirm() {
			this.dialog = false
		},
		back() {
			this.$emit('back')
		},
		Login() {
			if (this.admin) {
				if (!this.userPassword || !this.userNo ) {
					this.dialog = true
					this.dialogMsg = '请填写完整'
					return
				}
				this.$http.post(
					this.$CONSTANTS.APIUser +'login',{
						userNo: this.userNo,
						userPassword: this.userPassword
					}).then((res) => {
						if(res.body.code == 200){
							this.userNo = ''
							this.userPassword = ''
							sessionStorage.id = res.body.data.id
							sessionStorage.userNo = res.body.data.userNo
							sessionStorage.userPhone = res.body.data.userPhone
							sessionStorage.name = res.body.data.userName
							this.$router.push('/exhibition')
						} else {
							alert('用户名或密码出错')
						}
					})
				return
			}
			
			if (this.customer) {
				if (!this.userNo || !this.userPassword) {
					this.dialog = true
					this.dialogMsg = '请填写完整'
					return
				}
				this.$http.post(
					this.$CONSTANTS.APIUser +'login',{
						userNo: this.userNo,
						userPassword: this.userPassword
					}).then((res) => {
						if(res.body.code == 200){
							this.userNo = ''
							this.userPassword = ''
							sessionStorage.id = res.body.data.id
							sessionStorage.userNo = res.body.data.userNo
							if(res.body.data.userPhone != null){
								sessionStorage.userPhone = res.body.data.userPhone
							}
							sessionStorage.name = res.body.data.userName
							this.$router.push('/exhibition')
						} else {
							alert('用户名或密码出错')
						}
					})
			}
			
		}
	}
}
</script>

<style scoped>
#login {
	height: 100%;
	overflow: hidden;
	position: relative;
}
.back{
	position: fixed;
	left: 20px;
	top: 20px;
	width: 30px;
	height: 30px;
	background: url('../assets/images/back.png') no-repeat;
	background-size: cover;
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

.login-box {
	width: 600px;
	padding: 50px;
	margin: 40px auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	z-index: 100001;
}
.login-box .logo{
	width: 270px;
	height: 108px;
	margin-bottom: 20px;
	background: url('../assets/images/logo.png') no-repeat;
	background-size: cover;
}
.ipunt-wrap label{
	display: inline-block;
	width: 25px;
	height: 25px;
	vertical-align: middle;
	margin-right: 10px;
	background-size: cover;
}
.icon-id{
	background: url('../assets/images/id.png') no-repeat;
}
.icon-user{
	background: url('../assets/images/user.png') no-repeat;
}
.icon-password{
	background: url('../assets/images/password.png') no-repeat;
}

.ipunt-wrap input{
	border: none;
	outline: none;
	background: none;
	border-bottom: 1px solid #fff;
	margin-top: 30px;
	width: 200px;
	height: 30px;
	line-height: 30px;
	/* text-align: center; */
	color: #fff;
	font-size: 14px;
	padding: 0 5px;
}
.button {
	margin-top: 30px;
    margin-left: 60px
}
.toregist{
	font-size: 12px;
	float: right;
	padding-top: 20px;
	color: #fff;
}
.toregist a{
	color: #066197;
	text-decoration: none;
}

</style>