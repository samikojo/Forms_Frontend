<script setup>
</script>

<template>
	<div class="list row">
		<div class="col-md-6 section">
			<h4>Työntekijät</h4>
			<ul class="list-group">
				<li class="list-group-item" :class="{ active: index == currentIndex }" v-for="(employee, index) in employees"
					:key="index" @click="setActiveEmployee(employee, index)">
					{{ employee.first_name + " " + employee.last_name }}
				</li>
			</ul>

			<button class="m-3 btn btn-sm btn-danger" @click="removeAllEmployees">
				Poista kaikki
			</button>
		</div>
		<div class="col-md-6 section">
			<div v-if="currentEmployee">
				<h4>Työntekijä</h4>
				<div>
					<label><strong>Nimi:</strong></label> {{ currentEmployee.first_name + " " + currentEmployee.last_name }}
				</div>
				<div>
					<label><strong>Puhelin:</strong></label> {{ currentEmployee.phone }}
				</div>

				<a class="badge badge-warning" :href="'/employees/' + currentEmployee.id">
					Muokkaa
				</a>
			</div>
			<div v-else>
				<br />
				<p>Valitse työntekijä</p>
			</div>
		</div>
	</div>
</template>

<script>
import EmployeeDataService from "../services/EmployeeDataService";

export default {
	name: "employee-list",
	data() {
		return {
			employees: [],
			currentEmployee: null,
			currentIndex: -1,
		};
	},
	methods: {
		retrieveEmployees() {
			EmployeeDataService.getAll()
				.then(response => {
					this.employees = response.data;
					console.log(response.data);
				})
				.catch(e => {
					console.log(e);
				});
		},

		refreshList() {
			this.retrieveEmployees();
			this.currentEmployee = null;
			this.currentIndex = -1;
		},

		setActiveEmployee(employee, index) {
			this.currentEmployee = employee;
			this.currentIndex = index;
		},

		removeAllEmployees() {
			EmployeeDataService.deleteAll()
				.then(response => {
					console.log(response.data);
					this.refreshList();
				})
				.catch(e => {
					console.log(e);
				});
		},
	},
	mounted() {
		this.retrieveEmployees();
	}
};
</script>

<style>
.list {
	text-align: left;
	max-width: 750px;
	margin: auto;
}

.section {
	margin-bottom: 10pt;
}
</style>