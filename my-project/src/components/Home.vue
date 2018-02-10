<template>
<div class="hello">
<vue-highcharts :options="options" ref="lineCharts"></vue-highcharts>
    <button @click="load">load</button>

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
import VueHighcharts from 'vue2-highcharts'
const asyncData = {
  name: 'Tokyo',
  marker: {
    symbol: 'square'
  },
  data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
    y: 26.5,
    marker: {
      symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)'
    }
  }, 23.3, 18.3, 13.9, 9.6]
}
export default {
  name: 'Home',
  computed:{
    getUsername() {
      return store.state.userDetails
    }
  },
  data () {
    return {
      options: {
          chart: {
            type: 'spline'
          },
          title: {
            text: 'Monthly Average Temperature'
          },
          subtitle: {
            text: 'Source: WorldClimate.com'
          },
          xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          yAxis: {
            title: {
              text: 'Temperature'
            },
            labels: {
              formatter: function () {
                return this.value + '°';
              }
            }
          },
          tooltip: {
            crosshairs: true,
            shared: true
          },
          credits: {
            enabled: false
          },
          plotOptions: {
            spline: {
              marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
              }
            }
          },
          series: []
        }
    }
  },
  methods:{
    logout() {
      localStorage.removeItem("token");
      this.$router.push('/');
    },
    load(){
          let lineCharts = this.$refs.lineCharts;
          lineCharts.delegateMethod('showLoading', 'Loading...');
          setTimeout(() => {
              lineCharts.addSeries(asyncData);
              lineCharts.hideLoading();
          }, 2000)
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
  components: { VueHighcharts}
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
