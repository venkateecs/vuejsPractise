<template>
<div class="hello">
<button type="button" @click="newRequest()" style="float:right;" class="btn btn-info btn-lg">Create New Request</button>
 <div>
    <vue-good-table
      title="Demo Table"
      :columns="columns"
      :rows="rows"
      :paginate="true"
      :lineNumbers="true"/>
  </div>
</div>
</template>

<script>
import store from '../store/store'
import { mapActions, mapGetters } from 'vuex';
import { DataTable } from 'vue-data-tablee'
import _ from 'underscore'
export default {
  name: 'ViewDetails',
  computed:{
  },
   data () {
    return {
      artists:['Pharrel Williams', 'Led Zeppelin', 'Rolling Stones'],
      columns: [
        {
          label: 'Name',
          field: 'name',
          filterable: true,
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
          html: false,
          filterable: true,
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          inputFormat: 'YYYYMMDD',
          outputFormat: 'DD-MM-YYYY',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
          html: false,
        },
      ],
      rows: store.state.requestDetails 
    }
  },
  methods:{
    newRequest() {
      this.$router.push('/home/new');
    }
  },
  created(){
  },
  mounted(){
  },
  components: { DataTable }
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
