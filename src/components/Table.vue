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
				<td style="width:20px;">
					{{++index}}
				</td>
				<td  style="width:300px;">
					{{item.title}}
				</td>
				<td style="width:500px;">
					{{item.content}}
				</td>
				<td style="width:120px;">
					{{item.categoryName}}
				</td>
				<td  style="width:30px;">
					<a class="copyBtn" :data-clipboard-text ='item.content' style="color: #FF3030;text-decoration: underline;">复制</a>
				</td>
				<td v-show="isAdmin">
					<a @click="updatedoc(item.id,item.title,item.content,item.type,item.pcontent)" style="color: #00ff22;text-decoration: underline;">修改</a>
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
			if (sessionStorage.userPhone) {
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