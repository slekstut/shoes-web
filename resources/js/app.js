require("./bootstrap");

import Vue from "vue";
import App from "../js/components/App.vue";
import router from "./router";
import Form from './Form';

window.Form = 'Form';

new Vue({
    el: "#app",
    router,
    render: h => h(App)
});
