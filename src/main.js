import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faCog, faGear, faHouse, faPhone, faPowerOff, faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import MouseTracker from './components/MouseTracker.vue'; 

library.add(faPhone);
library.add(faBars);
library.add(faPowerOff);
library.add(faCog);
library.add(faUserCircle);
library.add(faHouse);
library.add(faUser);
library.add(faGear);

const app = createApp(App);

// Register the MouseTracker component globally
app.component("font-awesome-icon", FontAwesomeIcon);
app.component('mouse-tracker', MouseTracker); // Register the MouseTracker component
app.use(router);

app.mount('#app');

