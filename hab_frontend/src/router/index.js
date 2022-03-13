import Vue from 'vue'
// import App from '../App.vue'
import BigScreen from '../page/BigScreen'
import VueRouter from 'vue-router'
import Earth from '../components/Earth'
import MyAdmin from '../page/MyAdmin'
import BiliPage from '../page/BiliPage'
import BiliApp from '../page/App/BiliApp'
import BiliAppVideo from '../page/App/BiliAppVideo'
import index from '../page/index'
import Gift from '../components/VideoGift'
Vue.use(VueRouter)

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: index },
    { path: '/bigscreen', component: BigScreen },
    { path: '/earth', component: Earth },
    { path: '/myadmin', component: MyAdmin },
    { path: '/bilipage', component: BiliPage },
    { path: '/biliapp', component: BiliApp, },
    { path: '/biliapp/video', component: BiliAppVideo },
    { path: '/biliapp/gift', component: Gift }
  ]
})