import axios from 'axios';

export default {
    toggleMenuAction(context) {
        // context.commit('setToggleMenuBar', {option: thi})
    },
    fetchSearchItem(context,payload) {

        // context.commit('fetchSearchItem action triggered')
        const url = `${context.state.base_url}search.php?s=${payload.searched_item}`

        axios.get(url)
            .then(response => {
                // JSON responses are automatically parsed.
                console.log( "fetchSearchItem response",response.data)
                context.commit('mutateFetchCustomerFoodItem',response.data.meals)
            })
            .catch(e => {
                console.log( "fetchSearchItem error",e)
                context.commit('mutateFetchCustomerFoodItem error',[])
                // this.errors.push(e)
            })
    },
    searchByFilter(context,payload){

        let url = ''
        if(payload.searchTerm == "category"){
            url = `${context.state.base_url}filter.php?c=${payload.filterName}`
        }
        if(payload.searchTerm == "area"){
            url = `${context.state.base_url}filter.php?a=${payload.filterName}`
        }
        if(payload.searchTerm == "tags"){
            url = `${context.state.base_url}search.php?s=${payload.filterName}`
        }

        axios.get(url)
            .then(response => {
                context.commit('mutateFetchCustomerFoodItemByFilter',response.data.meals)
            })
            .catch(e => {
                context.commit('mutateFetchCustomerFoodItemByFilter',[])
            })

    },
    removeItemFromList(context,payload){

        context.commit('mutateRemoveItem', payload)

    },
    actionItemToFavorites(context,payload){
        context.commit('mutateAddFavoritesItems', payload)
    }
}