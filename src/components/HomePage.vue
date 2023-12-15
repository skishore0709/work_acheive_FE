<template>
  <div>
    <div class="top_side_bar">
        
        <div class="nav_bar">
            <div class="nav ">
              <div class="bar pl-4 ">
                  <button class="bars icons " @click="toggleCollapse">
                  <font-awesome-icon class="fa-lg "  icon="bars" />
                </button>
              </div>
              <div class=" icons-1 ">
                <p>WorkAchieve</p>
              </div>
             
              <div class="right_top_nav">
                <div class="profile_icon"><p> {{ emp_frst_letter }}</p></div>
                  <span @click="Login" class="power" ><font-awesome-icon icon="power-off" /></span>
              </div>
          </div>
        </div>
                <!-- sidebar -->
        <div>
          <div :class="{ collapsible: isCollapsed }">
            <div class="button">
              <a class="side_bar_icons" @click="Home">
                <p><font-awesome-icon class="icons mt-2 ml-4" icon="house" /></p>
                <p class="mt-1">Home</p>
              </a>
              <a class="side_bar_icons" @click="Profile">
                <p><font-awesome-icon class="icons mt-2 ml-4" icon="user" /></p>    
                <p class="mt-1">Profile</p>
              </a>
              <a class="side_bar_icons" @click="Settings">
                <p><font-awesome-icon class="icons mt-2 ml-4" icon="gear" /></p>
                <p class="mt-1">Settings</p>
              </a>
              <p class="footer">Privacy policy / Support</p>
            </div>
          </div>
      </div>
    </div>
    <div class="container">
          <content-page/>
    </div>
  </div>
    
</template>
<script>
import ContentPage from './ContentPage.vue';
import AccountService from '@/service/AccountService';
import store from '@/store';

export default {
  name: 'HomePage',
  data() {
      return {
        emp_id_data: null,
        isCollapsed: true,
        emp_data : null,
        emp_frst_letter : null,
      };
    },
  props: {
    msg: String,
  },
  computed: {
    emp_id() {
      return store.state.emp_id;
    },
  },
  components: {
    'content-page': ContentPage,
  },
  methods: {
    getEmployeeData() {
      AccountService.getEmployeeById(window.localStorage.getItem("login")).then((response) => {
        this.emp_data = response.data;
        this.emp_frst_letter = this.emp_data.employeeName.charAt(0);
      });
    },
      toggleCollapse() {
        this.isCollapsed = !this.isCollapsed;
      },
      isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      },
      Login(){
        this.$router.push({ path: '/' });
      }
    },
    mounted(){
      this.getEmployeeData();
    },
};
</script>
<style scoped>

.container {
  flex-wrap: wrap;
}

.profile_icon{
    background-color: rgb(125, 125, 211);
    width: 35px;
    height: 30px;
    border-radius: 100px;
    text-align:center;
    color: antiquewhite;
    letter-spacing: 1px;
    padding-top: 3px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.5);
    font-size: 18px;
    font-weight: 500;
}

.top_side_bar{
  position: fixed;
}
/*header css*/
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
  
  .right_top_nav {
    color: #ffffff;
    display:flex;
    gap: 25px;
    cursor: pointer;
    margin-top: 20px;
    width: 80px;
    margin-right: 25px;
    position: absolute;
    top: 0;
    right: 0;
  }

  .power{
    padding-top: 2px;
    font-size: 20px;
  }
  
  .bar {
    color: #ffffff;
    margin-top: 20px;
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


  /* sidebar css */

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
    width: 10000px;
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

  .footer{
    padding-top: 650px;
    color:aliceblue;
    padding-left: 60px;
    font-size: xx-small;
  }

</style>
@/store