<script setup>
</script>

<template>
	<div class="list row">
		<div class="col-md-6">
			<h4>Lisää uusi työntekijä</h4>
			<div v-if="!isSubmitted">
				<div class="form-group">
					<label for="first_name">Etunimi</label>
					<input type="text" class="form-control" id="first_name" required v-model="employee.first_name"
						name="first_name" />
				</div>

				<div class="form-group">
					<label for="last_name">Sukunimi</label>
					<input type="text" class="form-control" id="last_name" required v-model="employee.last_name"
						name="last_name" />
				</div>

				<div class="form-group">
					<label for="phone">Puhelin</label>
					<input type="text" class="form-control" id="phone" required v-model="employee.phone" name="phone" />
				</div>

				<button @click="saveEmployee" class="btn btn-success">Tallenna</button>
			</div>

			<div v-else>
				<h4>Työntekijä tallennettu tietokantaan!</h4>
				<button class="btn btn-success" @click="newEmployee">Lisää uusi</button>
			</div>
		</div>
	</div>
</template>

<script>
import EmployeeDataService from "../services/EmployeeDataService";

export default {
	name: "add-employee",
	data() {
		return {
			employee: {
				id: null,
				first_name: "",
				last_name: "",
				phone: ""
			},
			isSubmitted: false
		};
	},
	methods: {
		saveEmployee() {
			var data = {
				first_name: this.employee.first_name,
				last_name: this.employee.last_name,
				phone: this.employee.phone
			};

			EmployeeDataService.create(data)
				.then(response => {
					this.employee.id = response.data.id;
					console.log(response.data);
					this.isSubmitted = true;
				})
				.catch(e => {
					console.log(e);
				});
		},

		newEmployee() {
			this.isSubmitted = false;
			this.employee = {};
		}
	}
};
</script>

<style>
.list {
	text-align: left;
	max-width: 750px;
	margin: auto;
}
</style>