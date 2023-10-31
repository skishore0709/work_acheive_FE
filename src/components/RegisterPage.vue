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
                            <label>Name</label>
                            <input type="name" class="form-control" />
                            <label>Email</label>
                            <input type="email" class="form-control" />
                            <label>Password</label>
                            <input type="password" class="form-control" />
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
        this.$router.push({ path: '/login' });
      }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
    border-style: solid;
    width: 350px;
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
    margin-top: 30px;
    border-radius: 5px;
}

.container {
    width: fit-content;
    border: 5px solid #2c3e50;
    border-radius: 10px;
    margin-top: 10px;
}
.title{
    margin-top: 15px;
  align-items:start;
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
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
}
nav a.router-link-exact-active {
  color: whitesmoke;
  background-color: #2c3e50;
}
</style>