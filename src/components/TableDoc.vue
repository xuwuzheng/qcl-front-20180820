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
				<td  style="width:20px;">
					{{++index}}
				</td>
				<td  style="width:100px;">
					{{item.nike}}
				</td>
				<td  style="width:20px;">
					{{item.sex = "0" ? "男" : "女"}}
				</td>
				<td style="width:80px;">
					{{item.pic}}
				</td>
				<td  style="width:300px;">
					{{item.detail}}
				</td>
				<td  style="width:150px;">
					{{item.tag}}
				</td>
				<td  style="width:150px;">
					{{item.property}}
				</td>
				<td  style="width:20px;">
					{{item.popular}}
				</td>
				<td  style="width:20px;">
					{{item.likeNumber}}
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
	
	},
	methods: {
		
	}

}
</script>

<style scoped>

</style>