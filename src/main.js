import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/display.css";
import locale from "element-ui/lib/locale/lang/en";
import firebase from "firebase";
Vue.use(ElementUI, { locale });
const firebaseConfig = {
  apiKey: "AIzaSyD8e3DacphZBOzp-vqeE5XUQO9S3cDbwlE",
  authDomain: "restaurant-e535d.firebaseapp.com",
  databaseURL: "https://restaurant-e535d-default-rtdb.firebaseio.com",
  projectId: "restaurant-e535d",
  storageBucket: "restaurant-e535d.appspot.com",
  messagingSenderId: "256070785803",
  appId: "1:256070785803:web:c3cd2c856e81ca6474600e",
  measurementId: "G-1BY08NV9DY",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
Vue.config.productionTip = false;
 new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app")


