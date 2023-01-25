export default {
    getMenuState(state){
        return state.toggleMenu
    },
    getCategories(state){
      return state.categories
    },
    getFoodItems(state){
        return state.items
    }
}