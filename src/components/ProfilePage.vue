<template>
    <div >
      <div>
        <nav-bar></nav-bar>
      </div>
    </div>  
</template>
    
  
<script>

  import Nav_BarPage from './Nav_BarPage.vue';
  
  export default {
    name: 'ProfilePage',
    props: {
      msg: String,
    },
    components: {
      'nav-bar': Nav_BarPage, // 

    },
  };
</script>
  <style scoped>
  </style>
  