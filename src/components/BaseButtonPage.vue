<template>
    <button class="base-button" @click="handleClick">
        Click Me 
    </button>
  </template>
  
  <script>
  
  export default {
    name: 'BaseButton',
    methods: {
      handleClick() {
        this.$emit('click');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your button styles here */
  .base-button {
    padding: 10px 20px;
    background-color: #007bff;
    font-weight: 600;
    letter-spacing: 2px;
    border-radius: 20px;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  </style>
  