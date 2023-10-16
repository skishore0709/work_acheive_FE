<template>
    <div>
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
                    <p>Full Stack Developer</p>
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
                <div>
                    <div><PieChart></PieChart></div>
                </div>
            </div>
        </div>
        
    </div>
    <div class="content-3">
                <div class="report">
                    <div>
                    <p><strong style="font-size: 20px;
                    margin-left: 40px;">Daily Reports :</strong></p>
                    </div> 
                </div>
                <div> 
                    <form>
                        <textarea class="text-box" placeholder="Provide your daily report here....." />
                    </form>
                </div>
                <div class="submit-btn">
                    <BaseButton   buttonText = "Submit"/>
                </div>
               
            </div>
    </div>

    
    
</template>
<script>
import BaseButton from './BaseButton.vue';
import TextBox from './TextBox.vue';
import PieChart from './PieChart.vue' 

export default {
    data() {
    return {
      currentTime: '',
      currentDate: '',

      runninglogin: false,
      runningbreak: false,

      startlogTime: null,
      startbreakTime: null,

      logTime: '00:00:00',
      breakTime: '00:00:00',

      clockButtonLabel: 'Clock--In',
      isButtonDisabled: false,
      BreakButtonLabel:'Break--In',

      intervallogin: null,
      intervalbreak: null,
      resumeBreakIn: null,
    };
  },

  methods: {
    toggleClock() {
        if (this.runninglogin) {
            // Stop the stopwatch
            clearInterval(this.intervallogin);
            console.log("stop-login");
            this.runninglogin = false;
            this.clockButtonLabel = 'Clock--In';
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
            this.clockButtonLabel = 'Clock--Out';
  }
    },
    resumelogin(){
        console.log("LogIn Time ::"+this.logTime);
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
    this.clockButtonLabel = 'Clock--Out';
    },
    takeBreak() {
        if (this.runningbreak) {
            // Stop the break stopwatch
            clearInterval(this.intervalbreak);
            console.log("stop-break");
            this.runningbreak = false;
            this.BreakButtonLabel = 'Break--In';
            
            
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
            this.BreakButtonLabel = 'Break--Out';
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
    this.BreakButtonLabel = 'Break--Out';
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
    PieChart,
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
    height: 350px;
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
  margin-right: 55px;
  margin-top: 5px;
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
    margin-top: 30px;
    margin-bottom: 0;
}
.text-box{
    margin-top: 10px;
    margin-left: 50px;
    padding: 10px;
    width: 1000px;
    height: 200px;
    border-radius: 20px;
    border: 1px solid gray;
    letter-spacing: 3px;
    
}

.text-box::placeholder {
    padding-top: 80px;
    letter-spacing: 2px;
    text-align: center; /* You can use 'left', 'center', or 'right' */
}
</style>