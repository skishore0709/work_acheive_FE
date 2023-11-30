import { createApp } from 'vue'
import { createStore } from 'vuex'
import store from './store';
import { createPinia } from 'pinia';
import accountStore from './store/AccountStore';
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
const pinia = createPinia();

const creatingStore = createStore({
    state () {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })

// Register the MouseTracker component globally
app.component("font-awesome-icon", FontAwesomeIcon);
app.component('mouse-tracker', MouseTracker); // Register the MouseTracker component
app.use(router);
app.use(pinia);
app.use(store);
app.use(accountStore);
app.use(creatingStore);
app.mount('#app');

