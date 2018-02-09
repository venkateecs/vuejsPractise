export default {
    updatename(state,name) {
        state.name = name  ;
     },
     updateUserDetails(state,data) {
      state.userDetails.username = data.username ;
      state.userDetails.password = data.password ;
     },
     saveNewRequest(state,data) {
       state.requestDetails.push(data);
     }
}