<template>
  <div class="title">
    <!--img src="C:\Users\DELL\VueProject\work_acheive_1.0\src\assets\logo.jpg" alt="logo" width="500" height="600"-->
    <h4>Bandi Informatics</h4>
  </div>
  <nav style="margin-top: 30px;">
    <router-link to="/">LogIn</router-link> 
    <router-link :to="{name: 'Register'}">Register</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
}

nav {
  padding: 30px;
}
h4{
  font-weight: 550;
  font-size: xx-large;
  font-style:oblique;
}
.title{
  margin-top: 15px;
  align-items:start;
  padding-inline-end: 80%;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',  sans-serif;
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
