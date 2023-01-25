import {createStore} from 'vuex'
import rootMutations from "./mutations.js";
import rootActions from "./actions.js"
import rootGetters from "./getters.js"
// import MenuStore from "./menubar/index.js";



const store = createStore({
    // modules: {
    //     MenuStore: MenuStore
    // },
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
    getters: rootGetters
})

export default store