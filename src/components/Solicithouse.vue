<template>
	<section class="content-wrap">
		<div class="pic" id="movepic" v-bind:style="{transform:'perspective(800px) rotateX('+ roX + 'deg) rotateY(' +roY+'deg)'}">
			<img class="viewimg" src="../assets/images/1.jpg" ondragstart="return false" style="transform: rotateY(0deg) translateZ(300px)">
			<img class="viewimg" src="../assets/images/2.jpg" ondragstart="return false" style="transform: rotateY(32.7273deg) translateZ(300px);">
			<img class="viewimg" src="../assets/images/3.jpg" ondragstart="return false" style="transform: rotateY(65.4545deg) translateZ(300px);">
			<img class="viewimg" src="../assets/images/4.jpg" ondragstart="return false" style="transform: rotateY(98.1818deg) translateZ(300px);">
			<img class="viewimg" src="../assets/images/5.jpg" ondragstart="return false" style="transform: rotateY(130.909deg) translateZ(300px);">
			<img class="viewimg" src="../assets/images/6.jpg" ondragstart="return false" style="transform: rotateY(163.636deg) translateZ(300px);">
			<img class="viewimg" src="../assets/images/7.jpg" ondragstart="return false" style="transform: rotateY(196.364deg) translateZ(300px);">
			<img class="viewimg" src="../assets/images/8.jpg" ondragstart="return false" style="transform: rotateY(229.091deg) translateZ(300px);">
			<img class="viewimg" src="../assets/images/9.jpg" ondragstart="return false" style="transform: rotateY(261.818deg) translateZ(300px);">
			<img class="viewimg" src="../assets/images/10.jpg" ondragstart="return false" style="transform: rotateY(294.545deg) translateZ(300px);">
			<img class="viewimg" src="../assets/images/11.jpg" ondragstart="return false" style="transform: rotateY(327.273deg) translateZ(300px);">
			<p></p>
		</div>
	</section>
</template>

<script>
import Searchbar from './Searchbar'
import Table from './TableDoc'

export default {
	data() {
		return {
			roX:-10,
			roY:0,
			isMove:false
		}
	},
	created() {
		// this.Search()
	},
	mounted() {
		var deg=360/11;
		// var roX=-10,roY=0;
	 	var xN=0,yN=0;
		 var play=null;
		 let self = this;
		// document.getElementsByClassName('pic').each(function(i){
		// 	document.getElementsByClassName('pic').css({
		// 		// translateZ 定义2d旋转沿着z轴
		// 		"transform":"rotateY("+i*deg+"deg) translateZ(300px)"	
		// 	});
		// 	// 防止图片被拖拽
		// 	document.getElementsByClassName('pic').attr('ondragstart','return false');
		// });
		document.getElementById('movepic').addEventListener('mousedown', function(ev){
			var x_=ev.clientX;
			var y_=ev.clientY;
			clearInterval(play);
			console.log('我按下了');
			this.isMove=true
			console.log(this.isMove);
			if(this.isMove){
				document.getElementById('movepic').addEventListener('mousemove', function(ev){
					/*获取当前鼠标的坐标*/
					var x=ev.clientX;
					var y=ev.clientY;
					/*两次坐标之间的距离*/
					xN=x-x_;
					yN=y-y_;

					self.roY+=xN*0.2;
					self.roX-=yN*0.1;
					console.log('移动');
					x_=ev.clientX;
					y_=ev.clientY;
				});
			}
		});
		
	},
	methods: {
		// Search(keyword) {
		// 	this.$http.post(this.$CONSTANTS.APIDoc +'getDoc',{
		// 		cookie: keyword
		// 	}).then((res) => {
		// 		if(res.body.code == 200){
		// 			this.rentList = res.body.data;
		// 		}
		// 	})
		// }

	}
	
}
</script>

<style scoped>
section.content-wrap{
	position: relative;
}
.pic{
width: 120px;
height: 180px;
border: 1px red solid;
margin: 150px auto 0;
position: relative;
/*transform 旋转元素*/
transform-style:preserve-3d;
transform:perspective(800px) rotateX(-10deg) rotateY(0deg);

}
.pic img{
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 5px;
	box-shadow: 0px 0px 10px #fff;
	/*倒影的设置*/
	-webkit-box-reflect:below 10px -webkit-linear-gradient(top,rgba(0,0,0,0) 50%,rgba(0,0,0,.5) 100%);
}
.pic p{
	width: 1200px;
	height: 1200px;
	background: -webkit-radial-gradient(center center,600px 600px,rgba(255,255,255,.5),rgba(0,0,0,0));
	position: absolute;
	top:100%;left:50%;
	margin-top: -600px;
	margin-left: -600px;
	border-radius:600px;
	transform:rotateX(90deg);
}

</style>