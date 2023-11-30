<template>
    
    <div v-if="showMsg" :class="{
    'success-message': showMsg && messageType === 'success', 
    'error-message': showMsg && messageType === 'error' 
    }"
    >{{ message }}</div>


  </template>
  
  <script>
  export default {
    props: {
    result: String,
  },
  data() {
    return {
      showMsg: false,
      message: "", 
      messageType : "",
    };
  },
  methods: {
    submitForm() {
       const formSubmissionResult = this.result;
      // const formSubmissionResult = JSON.parse(String);
      console.log(formSubmissionResult);
        if(!formSubmissionResult)
          {
            this.message = "Failed to Submit";
            this.messageType = 'error';
      
          }
          else{
            this.message = "Submitted Successfully";
            this.messageType = 'success';
        
          }
  

      this.showMsg = true;

      setTimeout(() => {
        this.showMsg = false;
      }, 1500);
    },
  },
};
</script>
  
  <style scoped>
  .success-message {
    position: fixed;
    bottom: 50px;
    left: 33%;
    background-color: rgb(0, 202, 0);
    border-radius: 20px;
    padding-top: 10px;
    width: 500px;
    color: white;
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 20px;
    height: 50px;
    text-align: center;
  }
  .error-message {
    position: fixed;
    bottom: 50px;
    left: 33%;
    background-color: rgb(255, 19, 2);
    border-radius: 20px;
    padding-top: 10px;
    width: 500px;
    color: white;
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 20px;
    height: 50px;
    text-align: center;
  }
  </style>