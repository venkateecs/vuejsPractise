<template>
<div class="hello">

<div class="container">
  <!-- Trigger the modal with a button -->
  <button type="button" class="btn btn-warning btn-lg logout" data-toggle="modal" data-target="#myModal">Logout</button>
  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <p>Are you sure you want to logout</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" @click="logout()" data-dismiss="modal">Ok</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>
 <div style="text-align: center;"><h1>Welcome to Johnson & Johnson {{getUsername.username}}</h1></div>
<router-view/>
</div>
</template>

<script>
import store from '../store/store'
import { mapActions, mapGetters } from 'vuex';
import _ from 'underscore'
export default {
  name: 'Home',
  computed:{
    getUsername() {
      return store.state.userDetails
    }
  },
  data () {
    return {
    }
  },
  methods:{
    logout() {
      localStorage.removeItem("token");
      this.$router.push('/');
    },
    show(){
      this.$modal.show('hello-world', {
  title: 'Alert!',
  text: 'You are too awesome',
  buttons: [
    { 
      title: 'Deal with it',
      handler: () => { alert('Woot!') }
    },
    {
      title: '',       // Button title
      default: true,    // Will be triggered by default if 'Enter' pressed.
      handler: () => {} // Button click handler
    },
    { 
      title: 'Close'
    }
 ]
})
    }
  },
  created(){
  },
  mounted(){
  },
  components: { }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logout{
  float:right;
  position:absolute;
  top:1em;
  left:62em;
}
</style>
