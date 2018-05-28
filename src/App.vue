<template>
  <div id="app">
    <nav-bar></nav-bar>
    <transition name="fade" mode="out-in"><router-view name="body"/></transition>
    <footer-part></footer-part>
  </div>
</template>

<script>
import footerPart from './components/Footer';
import navBar from './components/Navbar'
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
require('./assets/css/student-course.css');
require('./assets/css/student-renwu.css');
export default {
  name: 'App',
  components:{
    footerPart,navBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;

    /*保证footer是相对于container位置绝对定位*/
    position:relative;  

    /*设置padding-bottom值大于等于footer的height值，以保证main的内容能够全部显示出来而不被footer遮盖；*/  
    padding-bottom: 100px;  
    box-sizing: border-box;

}
.fade-enter-active, .fade-leave-active {
        transition: opacity .5s
      }
      .fade-enter, .fade-leave-active {
        opacity: 0
      }
a{
  text-decoration: none!important;
}
</style>

