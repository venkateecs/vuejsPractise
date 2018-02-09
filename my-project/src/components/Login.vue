<template>
<div class="hello">
<div class="bgcolor">
Sri Pada Vallabha
</div>
<img src="http://fontslogo.com/wp-content/uploads/2013/12/Engagement_Johnson-and-Johnson-Logo-Font.jpg">
<div class="container">
	<div class="login-container">
            <div v-if="showUserError" id="output" class="alert alert-danger animated fadeInUp">sorry enter a username</div>
            <div v-if="showPwdError" id="output" class="alert alert-danger animated fadeInUp">sorry enter a password</div>
            <div class="avatar"></div>
            <div class="form-box">
                <form action="" method="">
                    <input name="user" type="text" v-model="userName" placeholder="username">
                    <input type="password" v-model="password" placeholder="password">
                    <button class="btn btn-info btn-block login" @click="login()" type="button">Login</button>
                </form>
            </div>
        </div>
        
</div>
</div>
</template>

<script>
import store from '../store/store'
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Login',
  computed:{
  },
  data () {
    return {
      userName: '',
      password:'',
      showUserError: false,
      showPwdError: false,
      msg: store.state.name
    }
  },
  methods:{
    login() {
      if (this.userName === null || this.userName === '') {
        this.showUserError = true ;
        this.showPwdError = false ;
      }
      if (this.password === null || this.password === '') {
        this.showUserError = false;
        this.showPwdError = true;
      }
      if (this.userName != '' && this.password!= '') {
        store.dispatch('updateUserDetailsAction', {'username':this.userName , 'password': this.password});
        localStorage.setItem("token", this.userName);
           this.$router.push('/home');
      }
    }
  },
  created(){
  },
  components: {  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{background: #eee url(http://subtlepatterns.com/patterns/sativa.png);}
html,body{
    position: relative;
    height: 100%;
}

.login-container{
    position: relative;
    width: 300px;
    margin: 80px auto;
    padding: 20px 40px 40px;
    text-align: center;
    background: #fff;
    border: 1px solid #ccc;
}

#output{
    position: absolute;
    width: 300px;
    top: -75px;
    left: 0;
    color: #fff;
}

#output.alert-success{
    background: rgb(25, 204, 25);
}

#output.alert-danger{
    background: rgb(228, 105, 105);
}


.login-container::before,.login-container::after{
    content: "";
    position: absolute;
    width: 100%;height: 100%;
    top: 3.5px;left: 0;
    background: #fff;
    z-index: -1;
    -webkit-transform: rotateZ(4deg);
    -moz-transform: rotateZ(4deg);
    -ms-transform: rotateZ(4deg);
    border: 1px solid #ccc;

}

.login-container::after{
    top: 5px;
    z-index: -2;
    -webkit-transform: rotateZ(-2deg);
     -moz-transform: rotateZ(-2deg);
      -ms-transform: rotateZ(-2deg);

}

.avatar{
    width: 100px;height: 100px;
    margin: 10px auto 30px;
    border-radius: 100%;
    border: 2px solid #aaa;
    background-size: cover;
}

.form-box input{
    width: 100%;
    padding: 10px;
    text-align: center;
    height:40px;
    border: 1px solid #ccc;;
    background: #fafafa;
    transition:0.2s ease-in-out;

}

.form-box input:focus{
    outline: 0;
    background: #eee;
}

.form-box input[type="text"]{
    border-radius: 5px 5px 0 0;
    text-transform: lowercase;
}

.form-box input[type="password"]{
    border-radius: 0 0 5px 5px;
    border-top: 0;
}

.form-box button.login{
    margin-top:15px;
    padding: 10px 20px;
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

</style>
