
export default {
    mutateToggleState(state, payload) {
        console.log("rootstate mutateToggleState called")
        state.toggleMenu = !state.toggleMenu
    },
    mutateFetchCustomerFoodItem(state,payload){
        console.log("menubar mutateFetchCustomerFoodItem called",payload)
        state.items = payload
        state.categories = []

        payload.forEach( (item, index)=>{
            if(!state.categories.includes(item.strCategory)){
                state.categories.push(item.strCategory)
            }

        })

    }
}