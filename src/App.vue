<template>
  <div id="app">
    <transition name="fade"><router-view class="view one" name="nav"/></transition>
    <transition name="fade"><router-view class="view two" name="body"/></transition>
    <transition name="fade"><router-view class="view three" name="footer"/></transition>
  </div>
</template>

<script>
require("./assets/css/signup.css");
require("./assets/css/hot.css");
require("./assets/css/paper.css");
require("./assets/css/style.css");
require("./assets/css/owl.carousel.css");
require("./assets/css/owl.theme.css");
require("./assets/css/circle.css");
require("./assets/js/jquery.min.js");
require( "./assets/js/bootstrap.min.js");
require("./assets/js/owl.carousel.js");
require("./assets/js/smoothScroll-ES5.js");
require('./assets/css/vue-dplayer.css');
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fade-enter-active, .fade-leave-active {
        transition: opacity .5s
      }
      .fade-enter, .fade-leave-active {
        opacity: 0
      }
      ::-webkit-scrollbar{
  display:none;
}
a{
  text-decoration: none!important;
}
</style>

