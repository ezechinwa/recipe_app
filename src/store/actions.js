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
                context.commit('mutateFetchCustomerFoodItem',[])
                // this.errors.push(e)
            })
    },
    removeItemFromList(context,payload){
        context.commit('mutateRemoveItem', payload)

    }
}