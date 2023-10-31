<template>
    <div v-if="showPopup" class="popup-container">
      <div class="popup-content">
        <form>
            <div class="form-group">
                <label for="leave_date">Date:</label>
                <input class="calendar" style="border-radius: 10px;width: 60%; margin-left: 80px; border: 1px solid black;" type="date" id="birthdate" required>
                </div>
            <div class="form-group">
          <label for="leave_type">Leave Type:</label>
          <select id="leaveType" style="border-radius: 10px;width: 60%; margin-left: 30px; border: 1px solid black;" required>
                    <option value="" disabled selected>Select an option</option>  
                    <option value="casual_leave">Casual Leave</option>
                    <option value="un_paid_leave">Un-Paid Leave</option>
                </select>
        </div>
        <div class="form-group">
            <label for="reporting_to">Reporting to:</label>
            <select id="reporting" style="border-radius: 10px;width: 60%; margin-left: 25px; border: 1px solid black;" required>
                    <option value="" disabled selected>Select an option</option>  
                    <option value="manager">Manager</option>
                    <option value="supervisor">Team Leader</option>
                </select>
        </div>
        <div style="display: flex;">
          <label for="task_worked_on" style="margin-left: 1px;font-weight: 500; margin-top: 20px;" >Reason:</label>
          <textarea class="text_box_space" type="text" style="margin-left: 50px; margin-top: 20px; height: 100px; width: 400px; border: 0.5px solid black; border-radius: 12px; text-align: start;" placeholder="Provide notes here.." id="task_worked_on" /><br>
         </div>
        <div class="button">
            <BaseButton @click="apply_leave" class="apply_btn"  buttonText = "Apply" />
            <BaseButton @click="closePopup" class="close-button" buttonText = "Cancel"/>
        </div>
        </form>
        
      </div>
    </div>
  </template>
  
  <script>
  import BaseButton from './BaseButton.vue';

  const closePopUp = document.getElementById("close_pop_up");
  const popUp = document.getElementById("pop_up");
  const popUpContainer = document.querySelector(".popup-container");
  export default {
    name: 'PopupForm',
    components: {BaseButton},
    data() {
    return {
        showPopup: Boolean,
      formData: {
        date: '',
        leaveType: null,
        reportingTo: '',
        reason: '',
      }
    };
  },
  methods: {
    openPopup() {
        console.log("Opening - popUp component");
    },
    apply_leave(){
     
    },
    closePopup() {
        this.$emit('close-popUp');
    },
  }
  }
  </script>

  
  <style scoped>
  .popup-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin-bottom: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px); /* Apply blur to the background */
  }

  input{
    width: 300px;
  }
  .form-group {
    display: flex;
    margin-bottom: 20px;
}
.button{
    padding-top: 50px;
    display: flex;
    gap: 40px;
    justify-content: center;
}
 
  .popup-content {
    background: rgb(241, 241, 241);
    padding: 70px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  </style>