export default {
    updatenameAction({commit},payload){
        commit('updatename', payload)
    },
    updateUserDetailsAction({commit},payload){
        commit('updateUserDetails', payload)
    },
    saveNewRequestAction({commit},payload) {
         commit('saveNewRequest',payload) ;
    }
}