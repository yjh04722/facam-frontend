import axios from "axios";

const EMPLOYEE_API_BASE_URL = "https://api.mirmir0608.com/api/v1/employees";

class EmployeeService {

  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  addEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }
  getEmployeeById(id) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
  }
  updateEmployee(employee) {
    return axios.put(EMPLOYEE_API_BASE_URL, employee);
  }
  deleteEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL + "/delete", employee);
  }
  deleteById(id) {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
  }
}
let employeeService;
employeeService = new employeeService();
export default EmployeeService();
