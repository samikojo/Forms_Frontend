import http from "../http-common";

class EmployeeDataService {
	getAll() {
		return http.get("/materials");
	}

	get(id) {
		return http.get(`/materials/${id}`);
	}

	create(data) {
		return http.post("/materials", data);
	}

	update(id, data) {
		return http.put(`/materials/${id}`, data);
	}

	delete(id) {
		return http.delete(`/materials/${id}`);
	}

	deleteAll() {
		return http.delete(`/materials`);
	}
}

export default new EmployeeDataService();
