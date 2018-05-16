<template>
 <div id="navBar">  
   <!-- 模态框（Modal） -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content ">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title text-center" id="myModalLabel">用户登录</h4>
                </div>
                <div class="modal-body">
                    <form method="GET">
                        <input type="text" class="form-control" placeholder="邮箱/账号/手机号" v-model='username'>
                        <input type="password" class="form-control" placeholder="6-12位密码，不可用空格，区分大小写" v-model='password'>
                    </form>
                </div>
                <div class="modal-footer"> 
                    <button type="button" class="btn btn-default" @click='userLogin(username,password)'>登录</button>
                </div>
            </div>
        </div>
    </div>
    
    <a href="#" duration="1000" easing="smooth" scrollTo="header" class="scrollOnClick">
        <span class="zhiding"></span>
    </a>
    <div class="header" id="header">
        <div class="logo">
            <a href="#" title="首页">
                <router-link to="/">
                <img src="/static/img/LOGO.png">
                </router-link>
            </a>
        </div>
        <ul>
            <li v-for="nav in navBar">
                <a href="#" ><router-link :to="nav.path">{{nav.text}}</router-link></a>
            </li>
        </ul>
        <form action="" method="get" class="input-group">
            <div class="serch">
                <form>
                    <input type="text" class="form-control" value="数据结构">
                </form>

            </div>
            <div class="serchBu">
                <form>
                    <input type="button" class="input-group-addon">
                </form>
            </div>
        </form>
        <div  v-show="!isLogin">
            <img id="userPhoto" src="/static/img/photo.png" class="img-circle"/>
            <div class="login">
                <a href="#" data-toggle="modal" data-target="#myModal">登录</a>
                <a>/</a>
                <a href="#/stusignup">注册</a>
            </div>
        </div>
        <div  v-show="isLogin" style="z-index:9999999">
            <img id="userPhoto" :src="picUrl" class="img-circle"/>
            <div class="login">
                <a href="#" @click="toggleList()">{{nickname}}</a> 
                 <a>/</a>
                <a href="#" @click="userExit()">退出</a>
                <div class="list" v-show="isList">
                    <ul>
                        <li><a href="#">个人中心</a></li> 
                        <li><a href="#">设置</a></li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
 </div>
</template>

<script>
import Vue from 'Vue'
export default {
  name: 'Navbar',
  data () {
    return {
      navBar:[{
          path:'/',
          text:'首页'
      },{
          path:'/classes',
          text:'课程'
      },{
          path:'/circle',
          text:'学友圈'
      },{
          path:'/',
          text:'实训'
      }],
      username:'',
      password:'',
      picUrl:'',
      nickname:'',
      isLogin:false,
      isList:false
    }
  },methods:{
        userLogin(username,password){
            console.log(username,password); 
            this.$http.get('/static/mock/infoData.json')
            .then((response) => {
                let info=response.data.filter((item,index,array)=>{
                    return username===item.username;
                });
                 $('#myModal').modal('hide');
                //个人信息存入sessionStorage中，当前会话有效
                sessionStorage.setItem('yzInfo', JSON.stringify(info[0]));
                let info1=JSON.parse(sessionStorage.getItem('yzInfo'));
            this.picUrl=info1.headlogo;
            this.nickname=info1.nickname;
                this.isLogin=true;
            }).catch((response) => {
                console.log(response);
            });       
        },
        userExit(){
            this.isLogin=false;
            sessionStorage.removeItem('yzInfo');
        },
        toggleList(){
            this.isList=!this.isList;
        },
    },mounted: function () {
        this.$nextTick(function () {
            if(sessionStorage.getItem('yzInfo')){
            let info1=JSON.parse(sessionStorage.getItem('yzInfo'));
            this.picUrl=info1.headlogo;
            this.nickname=info1.nickname;
            this.isLogin=true;
            }
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-dialog{
    top:20%;
}
.list{
    position: fixed;
    z-index: 9999999;
    background: #fff;
    width: 90px;
    border-radius: 5px;
    right: 45px;
    height: 100px;
    margin-top: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.list ul{
    width: 90px;
    margin: 0;
    padding: 0;
    height: 100px;
}
.list ul li{
    margin: 0;
    width: 90px;
    height: 50px;
}
.list ul li a{
    margin:auto;
    transition: .3s ease-in-out;
    width: 100%;
    display: inline-block;
    line-height: 40px;
    color: #555;
}
.list ul li a:hover{
    color: #6699ff;
    transition: .3s ease-in-out;
}
</style>
