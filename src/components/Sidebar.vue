<template>
	<div id="sidebar">
		<ul>
			<div class="userinfo">
             <p class="userinfo-p">手机号：<span class="c333333">15858912532</span></p>
			 <p class="userinfo-p">姓名：<span class="c333333">徐武政</span></p>
			 <p class="userinfo-p">我的提问：<span class="c333333">0</span></p>
			 <p class="userinfo-p">我的回答：<span class="c333333">0</span></p>
			 <p class="userinfo-p">我的收藏：<span class="c333333">0</span></p>
            </div>
		</ul>
		<ul>
			<li v-for="(item,index) in sidebarList" class="list-item">
				<router-link :to="item.url">{{item.content}}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>

export default {
	
	data() {
		return {
			sidebarList: [],
			customerSidebar: [
				{content: '知识展示', url: '/exhibition'},
				{content: '添加知识', url: '/adddoc'},
				// {content: '出售房屋', url: '/sellhouse'},
				// {content: '求租房屋', url: '/solicithouse'},
				// {content: '购买房屋', url: '/buyhouse'},
				// {content: '个人信息', url: '/userinfo'},
				// {content: '密码修改', url: '/modifypass'},
				// {content: '留言板', url: '/messageboard'} 
			],
			adminSidebar: [
				{content: '知识展示管理', url: '/exhibition'},
				{content: '添加知识管理', url: '/adddoc'},
				{content: '类目管理', url: '/categorylist'},
				{content: '知识库统计查询', url: '/solicithouse'},
				// {content: '购买信息管理', url: '/buyhouse'},
				// {content: '会员信息管理', url: '/userlist'},
				// {content: '留言板管理', url: '/msgborlist'}
			]
		}
	},

	created() {
		if (sessionStorage.userPhone) {
			this.sidebarList = this.sidebarList.concat(this.adminSidebar)
		} else {
			this.sidebarList = this.sidebarList.concat(this.customerSidebar)
		}
	},
	
	methods: {
		
	}
}
</script>

<style scoped>
#sidebar{
	position: fixed;
	padding-top: 30px;
	width: 180px;
	height: 100%;
	z-index: 10;
	border-right: 1px solid #fff;
}
.list-item{
	height: 50px;
	line-height: 50px;
	text-align: center;
	font-family: '微软雅黑';
}
.list-item a.active{
	display: block;
	background: rgba(7,17,27,1);
}
.userinfo{
	margin: 0px 10px 40px 10px;
	padding: 25px;
	border: 1px solid;
}
.userinfo-p{
	width: 150px;
}
.c333333 {
    color: rgb(50, 248, 0);
}
</style>