<template>
<div class="hello">
<div v-if="hideMsg" class="alert alert-success">
  <strong>Request submitted successfully</strong>
</div>
<button type="button" @click="back()" style="float:left;position:relative;top:-5em;" class="btn btn-info btn-lg">Back to view</button>
<div class="alert alert-info">
  <strong>New Request</strong> 
</div>
<div class="container">
  <form>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="name" v-model="newReq.name" class="form-control" id="name" placeholder="Enter name" name="name">
    </div>
    <div class="form-group">
      <label for="age">Age:</label>
      <input type="text" v-model="newReq.age" class="form-control" id="age" placeholder="Enter Age" name="age">
    </div>
    <div class="form-group">
      <label for="createdOn">Created On:</label>
      <div class="row">
      <div class="col-md-12">
        <date-picker v-model="newReq.createdOn" :config="config" placeholder="Enter Date" name="age"></date-picker>
      </div>
    </div>
    </div>
    <div class="form-group">
      <label for="percent">Percent:</label>
      <input type="text" v-model="newReq.percent" class="form-control" id="percent" placeholder="Enter percent" name="percent">
    </div>
    <button class="btn btn-info" @click="submit($event)">Submit</button>
  </form>
</div>

</div>
</template>

<script>
import store from '../store/store'
import { mapActions, mapGetters } from 'vuex';
import _ from 'underscore'
 import 'bootstrap/dist/css/bootstrap.css';
 import datePicker from 'vue-bootstrap-datetimepicker';
 import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';
 
export default {
  name: 'NewRequest',
  computed:{
    getReqDetails() {
      return store.getters.getReqDetails ;
    }
  },
   data () {
    return {
      someDate:new Date(),
      newReq:{
      name: '',
      age:'',
      createdOn: new Date(),
      percent:''
      },
      hideMsg: false,
      date: new Date(),
        config: {
          format: 'DD/MM/YYYY',
          useCurrent: false,
        }       
    }
  },
  methods:{
    back(){
      this.$router.push('/home/view');
    },
    submit(e) {
      debugger
     e.preventDefault();
     //let setId = this.getReqDetails.slice(-1).pop().id ;
     let setId =_.last(this.getReqDetails).id;
      setId = setId+1 ;
     const obj = {
        id:setId, 
        name:this.newReq.name,
        age:this.newReq.age,
        createdAt:this.$moment(this.newReq.createdOn).format("YYYYMMDD"),
        score: this.newReq.percent,
     }
     store.dispatch('saveNewRequestAction', obj);
     this.newReq.name= '' ;
     this.newReq.age= '' ;
     this.newReq.createdOn= '' ;
     this.newReq.percent= '' ;
     this.hideMsg = true;
     this.$router.push('/home/view');
    }
  },
  created(){
  },
  mounted(){
  },
  components: { datePicker }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logout{
  float:right;
  position:absolute;
  top:1em;
  left:77em;
}
</style>
