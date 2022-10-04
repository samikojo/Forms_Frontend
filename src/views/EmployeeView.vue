<script setup>
import ShowEmployees from '../components/ShowEmployees.vue';
import AddEmployee from '../components/AddEmployee.vue';
defineProps({});
</script>

<template>
	<div>
		<AddEmployee></AddEmployee>
		<div class="space"></div>
		<ShowEmployees></ShowEmployees>
	</div>
</template>

<style scoped>
.space {
	margin: 10pt;
}
</style>
