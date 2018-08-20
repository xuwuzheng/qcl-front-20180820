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
				<td style="width:300px;">
					{{item.title}}
				</td>
				<td  style="width:300px;">
					{{item.docdescribe}}
				</td>
				<td>
					{{item.typename}}
				</td>
				<td>
					{{item.author}}
				</td>
				<td>
					{{item.visitnum}}
				</td>
				<td>
					{{item.hotnum}}
				</td>
				<td>
					{{item.praiseyes}}
				</td>
				<td>
					{{item.praiseno}}
				</td>
				<td>
					{{item.evaluate}}
				</td>
				<td>
					{{item.answeringnum}}
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