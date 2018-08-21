<template>
	<table>
		<thead>
			<tr>
				<th v-for="item in thead">
					{{item}}
				</th>
			</tr>
		</thead>
		<tbody>				
			<tr v-for="(item,index) in list">
				<td  style="width:40px;">
					{{++index}}
				</td>
				<td  style="width:100px;">
					{{item.nike}}
				</td>
				<td  style="width:40px;">
					{{item.sex == "0" ? "男" : "女"}}
				</td>
				<td  style="width:200px;">
					<img :src=item.pic />
				</td>
				<td  style="width:400px;">
					{{item.detail}}
				</td>
				<td  style="width:250px;">
					{{item.tag}}
				</td>
				<td  style="width:250px;">
					{{item.property}}
				</td>
				<td  style="width:80px;">
					{{item.popular}}
				</td>
				<td  style="width:80px;">
					{{item.likeNumber}}
				</td>
				<td v-show="isAdmin">
					<!-- <a @click="updatedoc(item.id,item.title,item.content,item.type,item.pcontent)" style="color: #00ff22;text-decoration: underline;">修改</a> -->
					<a @click="deleted(item.id)" style="color: #FF3030;text-decoration: underline;">删除</a>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>

export default {
	props: ['thead', 'list'],
	filters: {
		
	},
	computed: {
		isAdmin() {
			if (sessionStorage.sb == "false") {
				return true
			} else {
				return false
			}
		}
	},
	methods: {
		deleted (id) {
			this.$emit('deleted', id)
		},
		updatedoc (id,title,content,type,pcontent) {
			this.$emit('updatedoc', id,title,content,type,pcontent)
		}
	}

}
</script>

<style scoped>

</style>