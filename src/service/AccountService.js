import axios from "axios";

const BACKEND_API_BASE_URL = 'http://localhost:8080/employee/';

const getEmployee = 'get';
const getEmployeeByMail = 'login/';


class AccountService {
  getEmployees() {
    return axios.get(`${BACKEND_API_BASE_URL+getEmployee}`);
  }

  getEmployeeById(id){
    return axios.get(`${BACKEND_API_BASE_URL}${getEmployee}/${id}`)
  }

  loginByMail(email,password) {
    // Make an API call to login using the provided email
    return axios.get(`${BACKEND_API_BASE_URL}${getEmployeeByMail}${email}/${password}`);
  }
  
}

export default new AccountService();