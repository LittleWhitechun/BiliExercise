import Vue from 'vue'
import App from '../App.vue'
import BigScreen from '../page/BigScreen'
import VueRouter from 'vue-router'
import Earth from '../components/Earth'
Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes:[
        {path:'/',component:App},
        {path:'/bigscreen',component:BigScreen},
        {path:'/earth',component:Earth}
    ]
})