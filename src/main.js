import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faCog, faGear, faHouse, faPhone, faPowerOff, faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(faPhone);
library.add(faBars);
library.add(faPowerOff);
library.add(faCog);
library.add(faUserCircle);
library.add(faHouse);
library.add(faUser);
library.add(faGear);
createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')

