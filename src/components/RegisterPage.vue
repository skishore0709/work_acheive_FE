<template>
            <div class="title">
        <h4>Horizon Family</h4>
    </div>
    <nav style="margin-top: 30px;">
    <router-link class="login_btn" :to="{name: 'Login'}">LogIn</router-link>
    <router-link class="register_btn" :to="{name: 'Register'}">Register</router-link>
  </nav>
  
    <div>
        <div class="container bg-dark text-light">
            <div class="row">
                <div class="col-md-12">
                    <form>
                        <div class="form-group">
                            <label>Name</label>
                            <input type="name" class="form-control" required />
                            <label>Email</label>
                            <input type="email" class="form-control" required />
                            <label>Password</label>
                            <input type="password" class="form-control" required/>
                            <label>Confirm Password</label>
                            <input type="password" class="form-control" required/>
                            <label style="padding-right: 0;">Designation</label><br>
                            <select required>
                              <option value="" disabled selected>Select an option</option>  
                              <option value="manager">Manager</option>
                              <option value="supervisor">Team Leader</option>
                              <option>Software Developer</option>
                              <option>Medical Scribe</option>
                              <option>Medical Records Reviewer</option>
                              <option>Vitual Health Assistant</option>
                              <option>Network Engineer</option>
                              <option>Data Analyst</option>
                              <option>Data Scientist</option>
                              <option>Executive Assistant</option>
                            </select><br>
                            <button @click="Login" type="button" class="btn btn-success">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'RegisterPage',
    props: {
        msg: String
    },
    methods:{
        Login(){
        this.$router.push({ path: '/' });
      }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
    border-style: solid;
    width: 380px;
}

select{
  border-style: solid;
  width: 380px;
  height:40px;
  border-radius: 5px;
}

label {
    padding-right: 250px;
    margin-top: 20px;
    font-weight: 700;
    align-content: flex-start;
}

form {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 35px;
}

button {
  margin-left: 160px;
  margin-top: 40px;
  border-radius: 5px;
}

.container {
    width: fit-content;
    border: 5px solid #2c3e50;
    border-radius: 10px;
    margin-top: 10px;
}
.title{
  align-items:start;
  padding-top: 20px;
  padding-left: 10px;
  padding-inline-end: 60%;
  color: whitesmoke;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
}
h4{
  font-weight: 550;
  font-size: xx-large;
  font-style:oblique;
}
nav {
  padding: 30px;
  text-align: center;
}
nav a {
  font-weight: bold;
  color: whitesmoke;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
}
.register_btn:hover,
.login_btn:hover{
  background-color: #2c3e50;
  color: aliceblue;
  cursor: pointer;

}
nav a.router-link-exact-active {
  color: whitesmoke;
  background-color: #2c3e50;
}
</style>