import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import tabrik from './tabrik.vue';
import kurs from "./tabrik2.vue"

import { createRouter,createWebHashHistory } from 'vue-router';
import new_year from "../src/new_year.vue";
let  router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {path : "/akajon", component : tabrik},
        {path : "/kurs", component : kurs}
    ]
})
alert("Assalomu alaykum")
const app = createApp(App);
app.use(router)
app.mount('#app')
