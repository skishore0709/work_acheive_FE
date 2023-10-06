<template>
  <div >
    <div>
      <nav-bar></nav-bar>
    </div>
    <div class="container">
      <Content></Content>
    </div>
  </div>
    
 
    

  </template>
  

<script>
import ContentPage from './ContentPage.vue';
import Nav_BarPage from './Nav_BarPage.vue';

export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
  components: {
    'nav-bar': Nav_BarPage, // Register the Nav_Bar component for use in the template
    'Content': ContentPage,
  },
};
</script>
<style scoped>

.container {
  display: flex;
  flex-wrap: wrap;
}





</style>
