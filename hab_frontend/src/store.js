import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
const store = new Vuex.Store({
    // 存储状态值
    state: {
        videos:[],
        curVideo:{title:'123'},
        showGiftTable:false
    },

    mutations: {
        updateVideos(state,videos){
            state.videos = videos
        },
        updateCurVideo(state,video){
            state.curVideo = video
        },
        showGiftTable(state,bool){
            state.showGiftTable = bool
        }
    },

    getters: {

    },
    actions: {

    }
})

export default store;