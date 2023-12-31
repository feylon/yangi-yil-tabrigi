import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter,createWebHistory } from 'vue-router';
import new_year from "../src/new_year.vue";
let  router = createRouter({
    history:createWebHistory(),
    routes:[
        {component:new_year, path:"/happy/:id"},
        {component:new_year, path:"/:id"},
        {path:"/:pathMatch(.*)*",component:new_year}
    ]
})

const app = createApp(App);
app.use(router)
app.mount('#app')
