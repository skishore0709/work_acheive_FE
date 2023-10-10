<template>
    <!-- Your main content -->
    <div class="nav_bar">
   
      <div class="nav ">
      <div class="bar pl-4 is-size-8-mobile">
        <button class="bars icons " @click="toggleCollapse">
          <font-awesome-icon class="fa-lg "  icon="bars" />
        </button>
        
      </div>
      <div class=" icons-1  is-size-4-mobile    ">
        <p>WorkAchieve</p>
      </div>
      <ul>
        <li></li>
      </ul>
      <div class="power is-size-4-mobile">
        <span class="m-3"> <font-awesome-icon icon="cog" /></span>
        <span @click="Login" v-if="!isMobile()"><font-awesome-icon icon="power-off" /></span>
      </div>
    </div>
  
    <!-- Sidebar -->
    <div>
      <div :class="{ collapsible: isCollapsed }">
        <div class="button">
          <a class="side_bar_icons">
            <p><font-awesome-icon class="icons mt-2 ml-4" icon="house" /></p>
            <p class="mt-1">Home</p>
          </a>
          <a class="side_bar_icons">
            <p><font-awesome-icon class="icons mt-2 ml-4" icon="user" /></p>    
            <p class="mt-1">Profile</p>
          </a>
          <a class="side_bar_icons">
            <p><font-awesome-icon class="icons mt-2 ml-4" icon="gear" /></p>
            <p class="mt-1">Settings</p>
          </a>
          <p class="footer">@ Bandi Informatics</p>
          <!-- <a class="side_bar_icons ml-4">
            <p>@</p>
            <p>Settings</p>
          </a> -->
        </div>
      </div>
    </div>
  
    </div>
    
  </template>
    
  <script>
import LoginPage from './LoginPage.vue';

  export default {
    name: 'Nav_BarPage',
    data() {
      return {
        isCollapsed: true,
      };
    },
    props: {
      msg: String
    },
    methods: {
      toggleCollapse() {
        this.isCollapsed = !this.isCollapsed;
      },
      isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      },
      Login(){
        this.$router.push({ path: '/login' });
      }
    },
  };
  </script>
  
  
  <style scoped>
  body {
    margin: 0px;
    padding: 0px;
    line-height: 0.5;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  
  .nav {
    background: #120e0e;
    color: #303030;
    display: flex;
    margin: 0px;
    height: 60px;
    top: 0;
    left: 0px;
    right: 0px;
    position: fixed;
  }
  
  .nav .logo {
    font-size: 24px;
    padding: 20px;
    margin-left: 10px;
    color: #ffffff;
  }
  
  .nav .logo a {
    text-decoration: none
  }
  
  .nav ul {
    margin: 0;
    padding: 0;
    display: flex;
    width: 50%;
    color: #ffffff;
    margin-left: auto
  }
  
  .nav .bar {
    cursor: pointer;
  }
  
  ul li {
    padding: 20px;
    list-style: none
  }
  
  ul li a {
    color: #ffffff;
    justify-content: center;
  }
  
  .logo {
    font-family: MD Primer, Rubik, Lato, Lucida Grande, Lucida Sans Unicode, Tahoma, Sans-Serif;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 5px;
  }
  
  .power {
    color: #ffffff;
    cursor: pointer;
    margin-top: 20px;
    width: 80px;
  }
  
  .bar {
    color: #ffffff;
    margin-top: 20px;
  }
  
  .logIn a {
    color: #ffffff;
    cursor: pointer;
    text-align: start;
  }
  
  .collapsible {
    overflow: hidden;
    width: 60px;
    transition: 0.1s;
  }
  
  .button {
    margin-top: 60px;
    margin-bottom: 0;
    width: 205px;
    background-color: #120e0e;
    height:10000px;
    border: none;
    display: block;
    left: 0px;
    padding-top: 10px;
    padding-bottom: 0;
    
    
  }
  
  .side_bar_icons {
    display: flex;
    column-gap: 30px;
    margin-bottom: 10px;
    
  }
  
  a{
    padding-top: 10px;
    padding-bottom: 0;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    color: #ffffff;
    transition: 0.2s;
    margin-bottom: 0;
  }
  a:hover{
    background-color: rgb(255, 255, 255);
    font-weight: 700;
    color: #120e0e;
    text-decoration: none;
    cursor: pointer;
  }
  
  .collapsed {
    width: 190px;
  
  }
  .nav_bar{
    position: fixed;
  }
  .bars{
      color: #ffffff;
      background: none;
      border: none;
      padding: 0;
      margin: 0;
      font-family: inherit;
      font-size: inherit;
      cursor: pointer;
      outline: none;
    
  }
  .icons-1{
    color: white;
    font-weight: 600;
    letter-spacing: 6px;
    padding: 15px;
    font-size: 25px;
    margin-left: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .icons,
  .icons-1{
    transition: 0.1s;
    margin-bottom: 0;
  }
  .icons:hover{
    transform: scale(1.5,1.5);
  }
  .icons-1:hover{
    transform: scale(1.2,1.2);
  }
  .footer{
    padding-top: 360px;
    color:aliceblue;
    padding-left: 60px;
    font-size: xx-small;
  }
  </style>