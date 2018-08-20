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
				<td>
					{{++index}}
				</td>
				<td>
					{{item.name}}
				</td>
				<td v-show="isAdmin">
					<a @click="updatecategory(item.id,item.name)" style="color: #00ff22;text-decoration: underline;">修改</a>
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
		updatecategory (id,name) {
			this.$emit('updatecategory', id,name)
		}
	}

}
</script>

<style scoped>

</style>