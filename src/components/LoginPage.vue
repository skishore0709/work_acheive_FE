<template>
        <div class="title">
    <!--img src="C:\Users\DELL\VueProject\work_acheive_1.0\src\assets\logo.jpg" alt="logo" width="500" height="600"-->
        <h4>Horizon Family</h4>
    </div>
    
    <nav style="margin-top: 30px;">
      <router-link class="login_btn" :to="{name: 'Login'}">LogIn</router-link>
    <router-link class="register_btn" :to="{name: 'Register'}">Register</router-link>
  </nav>

  
  <div class="hello">
    <div class="container bg-dark text-light">
      <div class="row">
        <div class="col-md-12">
          <form>
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control" v-model="mail" />
              <label>Password</label>
              <input type="password" class="form-control" v-model="password" :class="{ 'mismatch': passwordMismatch }"/>
              <button @click="goToHomePage" type="button" class="btn btn-success">LogIn</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <p v-if="passwordMismatch"  class="error_message">Email & Password mismatch. Please try again.</p>
</template>

<script>

import AccountService from '@/service/AccountService';
import store from '@/store';

export default {
  name: 'LoginPage',
  data(){
    return{
      mail : null,
      employee_detail : false,
      employeeData : null,
      password : null,
      passwordMismatch: false,
      emp_id : null
    };
  },
  props: {
    msg: String
  },
  methods: {
  async goToHomePage() {
    try {
      const response = await AccountService.loginByMail(this.mail, this.password);
      this.employeeData = response.data;
      this.emp_id = this.employeeData.id;
      window.localStorage.setItem("login",this.emp_id);
      this.$router.push({ path: '/home' });
    } 
    catch (error) {
      if (error.response) {
        this.passwordMismatch = true;
      }
    }
  }
}

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input{
  border-style:solid ;
  width: 350px;
}
label{
  padding-right: 250px;
  margin-top: 20px;
  font-size: large;
  font-weight: 700;
  align-content: flex-start;
}
form{
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 35px;
}
button{
  margin-left: 140px;
  margin-top: 40px;
  border-radius: 5px;
}
.container{
  width: fit-content;
  border-radius: 10px;
  margin-top: 10px;
}
nav {
  padding: 30px;
  text-align: center;
}
h4{
  font-weight: 550;
  font-size: xx-large;
  font-style:oblique;
}
.title{
  padding-top: 20px;
  padding-left: 10px;
  align-items:start;
  padding-inline-end: 60%;
  color: whitesmoke;
  font-family:Verdana, sans-serif;
}

nav a {
  font-weight: bold;
  color: whitesmoke;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
}

nav a.router-link-exact-active {
  color: whitesmoke;
  background-color: #2c3e50;
}
.register_btn:hover,
.login_btn:hover{
  background-color: #2c3e50;
  color: aliceblue;
  cursor: pointer;

}

.error_message{
  color: brown;
  padding-top: 100px;
  padding-left: 40%;
}
</style>
