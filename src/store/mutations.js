
export default {
    mutateToggleState(state, payload) {
        console.log("rootstate mutateToggleState called")
        state.toggleMenu = !state.toggleMenu
    },
    mutateFetchCustomerFoodItem(state,payload){
        console.log("menubar mutateFetchCustomerFoodItem called",payload)
        state.items = []
        state.items = payload
    }
}