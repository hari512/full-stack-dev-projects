import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/v1/employees';

class EmployeeService {
    getAllEmployees() {
        return axios.get(BASE_URL);
    }

    createEmployee(emp) {
        return axios.post(BASE_URL + '/create', emp);
    }

    getEmployeeById(empId) {
        return axios.get(BASE_URL + '/' + empId);
    }

    updateEmployee(empId, emp) {
        return axios.put(BASE_URL + '/update/' + empId,emp);
    }

    deleteEmployee(empId) {
        return axios.delete(BASE_URL + '/delete/' + empId);
    }
}

const employeeServiceInstance = new EmployeeService();

export default employeeServiceInstance;
