import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter,createWebHashHistory } from 'vue-router';
import new_year from "../src/new_year.vue";
let  router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {component:new_year, path:"/xato/:id"},
        {path:"/:pathMatch(.*)*",component:new_year}
    ]
})

const app = createApp(App);
app.use(router)
app.mount('#app')
