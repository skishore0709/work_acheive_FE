<template>
    <div>
      <p v-if="activityStopped">Activity has stopped!</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activityStopped: false,
        activityTimer: null,
      };
    },
    created() {
      // Attach event listeners for both mouse movement and keyboard input
      window.addEventListener('mousemove', this.handleActivity);
      window.addEventListener('keydown', this.handleActivity);
      this.resetActivityTimer();
    },
    methods: {
      handleActivity() {
        // When there is activity (mouse or keyboard), reset the timer and hide the notification
        this.resetActivityTimer();
        this.activityStopped = false; // Hide the notification
      },
      resetActivityTimer() {
        // Clear the existing timer (if any)
        if (this.activityTimer) {
          clearTimeout(this.activityTimer);
        }
  
        // Start a new timer for 5 minutes
        this.activityTimer = setTimeout(() => {
          this.activityStopped = true; // Show the notification
        }, 5 * 1000); // 5 minutes in milliseconds
      },
    },
    beforeDestroy() {
      // Remove event listeners and clear the timer when the component is destroyed
      window.removeEventListener('mousemove', this.handleActivity);
      window.removeEventListener('keydown', this.handleActivity);
      clearTimeout(this.activityTimer);
    },
  };
  </script>
  