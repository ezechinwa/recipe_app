
export default {
    mutateToggleState(state, payload) {
        console.log("rootstate mutateToggleState called")
        state.toggleMenu = !state.toggleMenu
    },
    mutateFetchCustomerFoodItem(state,payload){
        console.log("menubar mutateFetchCustomerFoodItem called",payload)
        state.items = payload
        state.categories = []
        state.areas = []
        state.tags = []

        payload.forEach( (item, index)=>{
            if(!state.categories.includes(item.strCategory)){
                state.categories.push(item.strCategory)
            }

            if(!state.areas.includes(item.strArea)){
                state.areas.push(item.strArea)
            }

            if(!state.tags.includes(item.strTags)){
                state.tags.push(item.strTags)
            }

        })

    }
}