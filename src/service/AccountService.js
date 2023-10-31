import axios from "axios";

const employee = "employee";
const id = 0 ;
const HOST_API_URL = "http://localhost:8080";
const EMPLOYEE_GET_URL = `${HOST_API_URL}/${employee}/get${id}`;

class AccountService {
  getEmployeeById() {
    return axios.get(`${EMPLOYEE_GET_URL}`);
  }
}

export default new AccountService();