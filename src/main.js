import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
