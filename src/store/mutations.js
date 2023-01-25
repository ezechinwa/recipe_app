
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
            if(!state.categories.includes(item.strCategory) && item.strCategory !== null){
                state.categories.push(item.strCategory)
            }

            if(!state.areas.includes(item.strArea) && item.strArea !== null ){
                state.areas.push(item.strArea)
            }

            if(!state.tags.includes(item.strTags) && item.strTags !== null ){
                state.tags.push(item.strTags)
            }

        })

    },
    mutateFetchCustomerFoodItemByFilter(state,payload){
        state.items = payload
    },
    mutateRemoveItem(state,payload){
        //console.log('mutateRemoveItem payload', payload)
        if(payload.searchTerm == "category"){
            state.categories = state.categories.filter(e => e !== payload.itemName)
        }
        if(payload.searchTerm == "area"){
            state.areas =  state.areas.filter(e => e !== payload.itemName)
        }
        if(payload.searchTerm == "tags"){
            state.tags = state.tags.filter(e => e !== payload.itemName)
        }
    },
    mutateAddFavoritesItems(state,payload){

         // check if item already exists
        const isObjectPresent =  state.favorites.find((o) => o.idMeal === payload[0]);
        if (!isObjectPresent) {
            state.favorites.push({
                idMeal: payload[0], strMealThumb:payload[1], strMeal:payload[2]
            })
        }




      //  console.log('mutateAddFavoritesItems', state.favorites)
    }
}