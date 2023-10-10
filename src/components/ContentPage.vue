<template>
    <div class="container_body" >
        <div class="content_page">
            <div class="content-1 p-4 mt-7">
                <div class="profile_icon"><p>A</p></div>
                <div style="font-weight: 900;">
                    <p style="margin-bottom: 25px;">Name:</p>
                    <p>e-mail:</p>
                </div>
                <div>
                    <p style="margin-bottom: 25px;">Akash.c</p>
                    <p>akashsaka03@gmail.com</p>
                </div>
                <div style="font-weight: 900;">
                    <p style="margin-bottom: 25px;">Phone No:</p>
                    <p>Designation:</p>
                </div>
                <div>
                    <p style="margin-bottom: 25px;">7448792885</p>
                    <p>Software Developer</p>
                </div>
                
                
            </div>
            <div class="content-2">
                <div class="date_time">
                    <div class="current_time" id="current-time">{{ currentTime }}</div>
                    <div class="current_date" id="current-date">{{ currentDate }}</div>
                </div>
                <div class="log_time">
                    <p id="stopwatch">{{ logINTime }}</p>
                    <p>00:00:00</p>
                </div>
                <div class="clock_break_btn">
                    <!-- <BaseButton class="clock_btn" buttonText ="Clock In" /> -->
                    <BaseButton class="clock_btn"  :buttonText="clockButtonLabel" @click="toggleClock" />
                    <BaseButton class="break_btn"  :buttonText ="BreakButtonLabel" @click="takeBreak"/>
                </div>
            </div>
            <div class="content-3">
                <div>
                    <BaseButton class="leave-btn" buttonText = "Apply for Leave"/>
                </div>
                
            </div>
        </div>
        <div>
            <div class="col2-content-4">
                <div class="report">
                    <div>
                    <p><strong style="font-size: 20px;">Daily Reports :</strong></p>
                    </div> 
                </div>
                <div> 
                    <form>
                        <textarea class="text-box" placeholder="Provide your daily report here....." />
                    </form>
                </div>
                <div class="submit-btn">
                    <BaseButton  buttonText = "Submit"/>
                </div>
            </div>
        </div>
    </div>
    
    
</template>
<script>
import BaseButton from './BaseButton.vue';
import TextBox from './TextBox.vue';
export default {
    data() {
    return {
      currentTime: '',
      currentDate: '',
      running: false,
      startTime: null,
      logTime: '00:00:00',
      clockButtonLabel: 'Clock-In',
      BreakButtonLabel:'Break-In',
    };
  },
  computed: {
    logINTime() {
      // Format the elapsed time in HH:mm:ss
      if (this.startTime) {
        const elapsedSeconds = Math.floor((Date.now() - this.startTime) / 1000);
        const hours = Math.floor(elapsedSeconds / 3600);
        const minutes = Math.floor((elapsedSeconds % 3600) / 60);
        const seconds = elapsedSeconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      }
      return '00:00:00';
    },
  },
  methods: {
    toggleClock() {
      if (this.running) {
        // Stop the stopwatch
        clearInterval(this.interval);
        this.running = false;
        this.clockButtonLabel = 'Clock-In';
      } else {
        // Start the stopwatch
        this.startTime = Date.now() - (this.startTime ? (Date.now() - this.startTime) : 0);
        this.interval = setInterval(() => {
          this.logTime = this.logINTime;
        }, 1000);
        this.running = true;
        this.clockButtonLabel = 'Clock-Out';
      }
    },
    takeBreak() {
      // Handle the Break button click
      if (this.running) {
        // Stop the stopwatch
        clearInterval(this.interval);
        this.running = false;
        this.BreakButtonLabel = 'Break-In';
      } else {
        // Start the stopwatch
        this.startTime = Date.now() - (this.startTime ? (Date.now() - this.startTime) : 0);
        this.interval = setInterval(() => {
          this.logTime = this.logINTime;
        }, 1000);
        this.running = true;
        this.BreakButtonLabel = 'Break-Out';
      }
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
},
};
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
  
}
.container_body{
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 20px;
}
.content_page{
    display: flex;
    flex-direction: column;
    
}
.content-1{
    display: grid;
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
.content-2,
.content-3{
    border: 1px solid gray;
    border-radius: 15px;
    box-shadow: 0 5px 15px 0 rgba(77, 158, 204, 0.5);
    height: 175px;
    margin-bottom: 20px;
    background-color: rgb(255, 255, 255);
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
    height: 520px;
    background-color: rgb(226, 223, 223);
    
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
}
.leave-btn{
    background-color: #000000;
}

.report{
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: center; /* Center items horizontally */
    margin-left: 15px;
    margin-top: 10px;
    margin-bottom: 0;
}
.text-box{
    margin: 10px;
    padding: 10px;
    width: 350px;
    height: 350px;
    border-radius: 20px;
    border: 1px solid gray;
    letter-spacing: 3px;
    
}

.text-box::placeholder {
    padding-top: 150px;
    letter-spacing: 2px;
    text-align: center; /* You can use 'left', 'center', or 'right' */
}
</style>