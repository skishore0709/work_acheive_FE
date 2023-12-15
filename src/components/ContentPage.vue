<template>
    <div>
        <div class="container_body" >
        <div class="content_page">
            <div class="content-1 p-4 mt-7">
                <div class="profile_icon"><p> {{ emp_frst_letter }}</p></div>
                <div style="font-weight: 900;">
                    <p style="margin-bottom: 25px;">Name:</p>
                    <p>e-mail:</p>
                </div>
                <div>
                    <p style="margin-bottom: 25px;"> {{ emp_name }}</p>
                    <p> {{ emp_email }}</p>
                </div>
                <div style="font-weight: 900;">
                    <p style="margin-bottom: 25px;">Designation:</p>
                    <p>Reporting to:</p>
                </div>
                <div class="profile_content">
                    <p style="margin-bottom: 25px;"> {{ emp_designation }}</p>
                    <p> {{ emp_reporting }}</p>
                </div>
                
                
            </div>
            <div class="content-2" id="clock">
                <div class="date_time">
                    <div class="current_time" id="current-time">{{ currentTime }}</div>
                    <div class="current_date" id="current-date">{{ currentDate }}</div>
                </div>
                <div class="log_time">
                    <p  id="stopwatch">{{ logTime }}</p>
                    <p id="breakwatch">{{ breakTime }}</p>
                </div>
                <div class="clock_break_btn">
                    
                     
                    <BaseButton class="clock_btn" :isDisabled="isButtonDisabled"  :buttonText="clockButtonLabel" @click="toggleClock" />

                    <BaseButton class="break_btn"  :buttonText ="BreakButtonLabel" @click="takeBreak"/>
                </div>
            </div>
        </div>
        <div>
            <div class="col2-content-4">
                <div style="margin-bottom: 5px;">
                    <p><strong style="font-size: 20px;
                    margin-left: 20px;">Leave Summary</strong></p>
                    </div>
                <div>
                    <div><BarChart/></div>
                </div>
                <div>
                    <BaseButton class="leave_submit" @click="openPopup" buttonText="Apply Leave" />
                    <PopupForm  v-if="showPopup" @close-popUp="closePopup"  />
                </div>
                <!-- <BarChart ref="leaveChartComponent" /> -->
            </div>
        </div>
        
    </div>
    <div class="content-3">
                <div class="report">
                    <div style="margin-bottom: 20px;">
                    <p><strong style="font-size: 25px;
                    margin-left: 20px;">Daily Report</strong></p>
                    </div> 
                </div>
                <div> 
                    <form>
                        
                        <label for="task_worked_on" style="margin-left: 55px;margin-top: 20px; font-weight: 500;" >Task Worked On:</label>
                        <input class="text_box_space" type="text" style="margin-left: 30px;height: 40px; width: 800px; border-radius: 12px; border: 2px  black; " id="task_worked_on" placeholder="task name.."/><br>

                        <div style="display: flex;">
                            <label for="notes_on_task" style="margin-left: 55px;font-weight: 500; margin-top: 20px;" >Notes on task:</label>
                        <textarea class="text_box_space" type="text" style="margin-left: 50px; margin-top: 20px; height: 100px; width: 800px; border: 2px  black; border-radius: 12px; text-align: start;" placeholder="Provide notes here.." id="notes_on_task" /><br>
                        </div>

                        <label for="time_spent_on_task" style="margin-left: 55px;margin-top: 20px; font-weight: 500;" >Time Spent on Task:</label>
                        <input class="text_box_space" type="text" style="margin-top: 20px; margin-left: 10px;height: 40px; width: 800px; border-radius: 12px; border: 2px  black;" id="time_spent_on_task" placeholder="hh:mm "/><br>

                        <label for="deadline_for_task" style="margin-left: 55px;margin-top: 20px; font-weight: 500;" >Deadline for task:</label>
                        <input class="text_box_space" type="text" style="margin-top: 20px; margin-left: 30px;height: 40px; width: 800px; border-radius: 12px; border: 2px  black;" id="deadline_for_task" placeholder="yyyy-MM-dd "/><br>

                        <label for="new_deadline" style="margin-left: 55px;margin-top: 20px; font-weight: 500;" >New Deadline :</label>
                        <input class="text_box_space" type="text" style="margin-top: 20px; margin-left: 45px;height: 40px; width: 800px; border-radius: 12px; border: 2px  black;" id="new_deadline" placeholder="yyyy-MM-dd "/><br>
                        
                        <div style="display: flex;">
                            <label for="task_questions" style="margin-left: 55px;font-weight: 500; margin-top: 20px;" >Questions on task:</label>
                        <textarea class="text_box_space" type="text" style="margin-left: 20px; margin-top: 20px; height: 100px; width: 800px; border: 2px  black; border-radius: 12px; text-align: start;" placeholder="Provide Questions On task here.." id="task_questions" /><br>
                        </div>

                    </form>
                </div>
                <div class="submit-btn">
                    <BaseButton   buttonText = "Submit"/>
                </div>
            </div>
    </div>

    <MouseTracker />
    
</template>
<script>
import BaseButton from './BaseButton.vue';
import TextBox from './TextBox.vue';
import BarChart from './LeaveChart.vue' ;
import MouseTracker from './MouseTracker.vue';
import PopupForm from './PopupComponent.vue';
import AccountService from '@/service/AccountService';
import store from '@/store/index';


export default {
    data() {
    return {
        employees: [],
        emp_id_data: null,
        showPopup: false,
        employeeData: null, 
        emp_frst_letter : null,
        emp_name: null,
        emp_designation : null,
        emp_email : null,
        emp_reporting : null,
      currentTime: '',
      currentDate: '',

      runninglogin: false,
      runningbreak: false,

      startlogTime: null,
      startbreakTime: null,

      logTime: '00:00:00',
      breakTime: '00:00:00',

      clockButtonLabel: 'Clock-In',
      isButtonDisabled: false,
      BreakButtonLabel:'Break-In',

      intervallogin: null,
      intervalbreak: null,
      resumeBreakIn: null,
    };
  },

  computed: {
    emp_id() {
      console.log("employeeId :"+this.emp_id_data);
      return window.localStorage.getItem("login");
    },
  },

  methods: {
    toggleClock() {
        if (this.runninglogin) {
            // Stop the stopwatch
            clearInterval(this.intervallogin);
            console.log("stop-login");
            this.runninglogin = false;
            this.clockButtonLabel = 'Clock-In';
        } else {
            if (!this.startlogTime) {
            this.startlogTime = Date.now();
            } else {
            // Calculate the time elapsed since last pause and add it to startTime
            const elapsedSeconds = Math.floor((Date.now() - this.startlogTime) / 1000);
            this.startlogTime = this.startlogTime + elapsedSeconds * 1000;
            }

            this.intervallogin = setInterval(() => {
            const elapsedSeconds = Math.floor((Date.now() - this.startlogTime) / 1000);
            const hours = Math.floor(elapsedSeconds / 3600);
            const minutes = Math.floor((elapsedSeconds % 3600) / 60);
            const seconds = elapsedSeconds % 60;
            this.logTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            }, 1000);

            this.runninglogin = true;
            this.clockButtonLabel = 'Clock-Out';
  }
    },
    resumelogin(){
        if (this.runninglogin) {
        // The timer is already running, no need to resume
        return;
    }
    
    if (!this.startlogTime) {
        this.startlogTime = Date.now();
    } else {
        // Calculate the time elapsed during the break and add it to startTime
        const elapsedSeconds = Math.floor((Date.now() - this.startbreakTime) / 1000);
        this.startlogTime = this.startlogTime + elapsedSeconds * 1000;
    }

    this.intervallogin = setInterval(() => {
        const elapsedSeconds = Math.floor((Date.now() - this.startlogTime) / 1000);
        const hours = Math.floor(elapsedSeconds / 3600);
        const minutes = Math.floor((elapsedSeconds % 3600) / 60);
        const seconds = elapsedSeconds % 60;
        this.logTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);

    this.runninglogin = true;
    this.clockButtonLabel = 'Clock-Out';
    },
    openPopup() {
      this.showPopup = true;
    },
    //  incrementApprovalData() {
    //   // Call the method in the LeaveChart component to increment the "Approval" data
    //   this.$refs.leaveChartComponent.incrementApprovalData();
    // },

    closePopup() {
      this.showPopup = false;
    },
    getEmployee(emp_id){
        AccountService.getEmployeeById(window.localStorage.getItem("login")).then((response) => {
            this.employeeData = response.data;
            this.emp_name = this.employeeData.employeeName;
            this.emp_designation = this.employeeData.designation;
            this.emp_email = this.employeeData.mail;
            this.emp_reporting = this.employeeData.reportingTo;
            this.emp_frst_letter = this.employeeData.employeeName.charAt(0);
        });
    },
    takeBreak() {
        if (this.runningbreak) {
            // Stop the break stopwatch
            clearInterval(this.intervalbreak);
            console.log("stop-break");
            this.runningbreak = false;
            this.BreakButtonLabel = 'Break-In';
            
            
            this.resumelogin();
        }

        else {
            if(this.resumebreak){
                this.resumebreak();
            }
            else{
                if (!this.startbreakTime) {
                this.startbreakTime = Date.now();
                
            } else {
                // Calculate the time elapsed since the last pause and add it to startTime
                const elapsedSeconds = Math.floor((Date.now() - this.startbreakTime) / 1000);
                this.startbreakTime = this.startbreakTime + elapsedSeconds * 1000;
            }

            // Clear the login interval if it's running
            if (this.runninglogin) {
                clearInterval(this.intervallogin);
                console.log("stop-login");
                
                this.runninglogin = false;
            }

            this.intervalbreak = setInterval(() => {
                const elapsedSeconds = Math.floor((Date.now() - this.startbreakTime) / 1000);
                const hours = Math.floor(elapsedSeconds / 3600);
                const minutes = Math.floor((elapsedSeconds % 3600) / 60);
                const seconds = elapsedSeconds % 60;
                this.breakTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            }, 1000);

            this.runningbreak = true;
            this.BreakButtonLabel = 'Break-Out';
            }
            
            
        }
    },
    resumebreak() {
    if (this.runningbreak) {
        console.log("Break is already running.");
        return;
    }

    if (this.runninglogin) {
                clearInterval(this.intervallogin);
                console.log("stop-login");
                
                this.runninglogin = false;
            }

    // Calculate the elapsed time in seconds from the `breakTime` string
    const breakTimeParts = this.breakTime.split(':');
    const hours = parseInt(breakTimeParts[0]);
    const minutes = parseInt(breakTimeParts[1]);
    const seconds = parseInt(breakTimeParts[2]);
    const elapsedSeconds = hours * 3600 + minutes * 60 + seconds;

    // Update the `startbreakTime` to account for the elapsed time
    this.startbreakTime = Date.now() - elapsedSeconds * 1000;

    // Start the break timer again with the corrected `startbreakTime`
    this.intervalbreak = setInterval(() => {
        const elapsedSeconds = Math.floor((Date.now() - this.startbreakTime) / 1000);
        const hours = Math.floor(elapsedSeconds / 3600);
        const minutes = Math.floor((elapsedSeconds % 3600) / 60);
        const seconds = elapsedSeconds % 60;
        this.breakTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);

    this.runningbreak = true;
    this.BreakButtonLabel = 'Break-Out';
},
      displaySystemTimeAndDate() {
      const currentDateTime = new Date();
      const hours = currentDateTime.getHours();
      const minutes = currentDateTime.getMinutes();
      const seconds = currentDateTime.getSeconds();
      const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;


      const formattedDate = currentDateTime.toLocaleDateString('en-US', {
        weekday: 'short', // Display the full day of the week
        year: 'numeric',
        month: 'long', // Display the full month name
        day: 'numeric'
      });

      this.currentTime = `${formattedTime}`;
      this.currentDate = `${formattedDate}`;
    }
  },
  mounted() {
    this.getEmployee(store.state.emp_id_data);
    // Update the time every second
    setInterval(this.displaySystemTimeAndDate, 1000);
    // Initial update
    this.displaySystemTimeAndDate();
  },
 

  name: 'ContentPage',
  props: {
    msg: String,
  },
  components:{
    BaseButton,
    TextBox,
    BarChart,
    PopupForm,
    MouseTracker
},
};
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
  
}
.container_body{
    display: flex;
    grid-template-columns: 2fr 1fr;
    column-gap: 20px;

}
.content_page{
    display: flex;
    flex-direction: column;
}
.content-1{
    display: grid;
    width: 100%;
    grid-template-columns: 80px 60px 1fr 120px 1fr ;
    column-gap: 10px;
    margin-top: 100px;
    border: 1px solid gray;
    border-radius: 15px;
    font-size: 16px;
    box-shadow: 0 5px 15px 0 rgba(77, 158, 204, 0.5);
    height: 130px;
    margin-bottom: 20px;
    background-color: rgb(255, 255, 255);
}

/* .profile_content{
   width: 120%;
} */
.content-2{
    border: 1px solid gray;
    border-radius: 15px;
    box-shadow: 0 5px 15px 0 rgba(77, 158, 204, 0.5);
    height: 175px;
    margin-bottom: 20px;
    background-color: rgb(255, 255, 255);
}
.content-3{
    border: 1px solid gray;
    border-radius: 15px;
    box-shadow: 0 5px 15px 0 rgba(77, 158, 204, 0.5);
    height: 670px;
    right: 0%;
    width: 1110px;
    margin-bottom: 20px;
    background-color: rgb(226, 223, 223);

}
.content-2{
    display: flex;
    flex-direction: row;
    gap: 90px;
    text-align: center;
    padding: 0px;
    justify-content: center;
    align-items: center;
}
.date_time,
.log_time,
.clock_break_btn{
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
}
.current_time{
    font-size: 25px;
    font-weight: 700;
    color:black;
}
.current_date{
    font-size: 15px;
    color:dimgray;
}
.date_time,
.log_time{
    font-size: 20px;
}
.clock_btn,
.break_btn{
    height: 50px;
    background-color: #000000;
    color: white;
}
.text_box_space{
    padding-left: 10px;
}
.clock_btn:active,
.break_btn:active{
    background-color: #007bff;
}
.clock_break_btn{
    width: 200px;
}
.col2-content-4{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 390px;
    padding: 10px;
    margin-top: 100px;
    border: 1px solid gray;
    border-radius: 15px;
    box-shadow: 0 5px 15px 0 rgba(77, 158, 204, 0.5);
    height: 325px;
    background-color: rgb(255, 255, 255);
    
}
.profile_icon{
    background-color: rgb(125, 125, 211);
    width: 75px;
    height: 75px;
    border-radius: 100px;
    text-align:center;
    color: antiquewhite;
    letter-spacing: 1px;
    padding-top: 19px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.5);
    font-size: 25px;
    font-weight: 700;
    margin-right: 0px;
}
.submit-btn{
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;/* Adjust padding as needed */
  margin-right: 95px;
  margin-top: 40px;
}
.leave-btn{
    background-color: #000000;
}

.leave_submit{
    margin-top: 15px;
    margin-left: 200px;
}

.report{
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: center; /* Center items horizontally */
    margin-left: 15px;
    margin-top: 30px;
    margin-bottom: 0;
}
.text-box{
    margin-top: 10px;
    margin-left: 50px;
    padding: 10px;
    width: 800px;
    height: 100px;
    border-radius: 20px;
    border: 2px solid black;
}


</style>