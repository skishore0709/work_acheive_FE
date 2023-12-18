<template>
    <button class="base-button" @click="handleClick">
        {{ buttonText }}
    </button>
  </template>

  <script>
  
  export default {
    name: 'BaseButton',
    props:{
      buttonText :{
        type : String,
        default:()=>"Label",        
      },
      click:Function,
    },
    methods: {
      handleClick() {
        // this.$emit('takeBreak');
        this.$emit('toggleClock');
        
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your button styles here */
  .base-button {
    padding: 10px 20px;
    background-color: #000000;
    font-weight: 600;
    letter-spacing: 3px;
    border-radius: 20px;
    color: #fff;
    border: none;
    cursor: pointer;
    outline: none;
  }
 
  .base-button:active{
    background-color: #007bff;
  }
  </style>
  