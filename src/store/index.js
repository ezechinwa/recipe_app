import {createStore} from 'vuex'
import rootMutations from "./mutations.js";
import rootActions from "./actions.js"
import rootGetters from "./getters.js"
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'


const store = createStore({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    state() {
        return {
            base_url: 'https://www.themealdb.com/api/json/v1/1/',
            toggleMenu: true,
            searched_item: 'Soup',
            items:[],
            favorites: [],
            categories: [],
            areas: [],
            tags: []
        }
    },
    mutations: rootMutations,
    actions:rootActions,
    getters: rootGetters,

})

export default store