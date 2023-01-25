export default {
    getMenuState(state){
        return state.toggleMenu
    },
    getCategories(state){
      return state.categories
    },
    getTags(state){
        return state.tags
    },
    getAreas(state){
        return state.areas
    },
    getFoodItems(state){
        return state.items
    }
}