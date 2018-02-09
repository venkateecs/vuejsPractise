<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>test {{ name }}</h1>
    <input type="button" @click="save()" value="save">
    <div class="container">
  <h2>Well</h2>
  <div class="well">Basic Well</div>
</div>
    <Child></Child>
  </div>
</template>

<script>
import Child from './child'
import store from '../store/store'
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'HelloWorld',
  computed:{
    ...mapGetters([
      'doneTodos',
    ]),
    name() {
      return store.getters.doneTodos
    }
  },
  data () {
    return {
      msg: store.state.name
    }
  },
  methods:{
  save() {
    //store.commit('updatename','venkat');
    store.dispatch('updatenameAction','venkat');
    this.msg = store.state.name
  }
  },
  components: { Child }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
