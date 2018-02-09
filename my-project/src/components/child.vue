<template>
  <div class="child">
    <h1>{{ showName }}</h1>
  </div>
</template>

<script>
import store from '../store/store'
export default {
  name: 'Child',
  computed:{
    showName() {
      return store.state.name ;
    }
  },
  data () {
    return {
      msg: store.state.name
    }
  }
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
