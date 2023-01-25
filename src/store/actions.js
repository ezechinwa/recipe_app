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
            url = `${context.state.base_url}filter.php?t=${payload.filterName}`
        }

        axios.get(url)
            .then(response => {
                // JSON responses are automatically parsed.
               // console.log( "fetchSearchItem response",response.data)
                context.commit('mutateFetchCustomerFoodItemByFilter',response.data.meals)
            })
            .catch(e => {
               console.log( "fetchSearchItem error",e)
                console.log( "fetchSearchItem url",url)
                context.commit('mutateFetchCustomerFoodItemByFilter',[])
                // this.errors.push(e)
            })

    },
    removeItemFromList(context,payload){

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

        context.commit('mutateRemoveItem', payload)

    }
}