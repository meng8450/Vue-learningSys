<template>
    <div id="settingNavbar">
        <div class="main">
        <div class="setting">
                    <div class="setting-left l">
                        <div class="user-cont">
                            <div class="user-mode">
                                <a href="#" class="user-setupimg"><img :src="headlogo"></a>
                            </div>
                        </div>
                        <div class="des-mode">
                            <p>{{nickname}}</p>
                        </div>
                        <div class="left-list">
                            <h2>账户管理</h2>
                        <div class="line"></div>
                        <ul class="menu">
                            <li v-for="(item,index) in settingNav" :key="index">
                                <router-link :to="item.href">{{item.text}}</router-link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                <transition name="fade"><router-view/></transition>
        </div>
    </div>
</template>
<style>
#settingNavbar{
    min-height:100vh;
}
.fade-enter-active, .fade-leave-active {
        transition: opacity .5s
      }
      .fade-enter, .fade-leave-active {
        opacity: 0
      }
.l{
	float: left;
}
.r{
	float:right;
}
.div{
    display: block;
}
.main{
    min-height: 650px;
}
.setting{
    width: 1050px;
    margin: 0 auto;
    padding: 30px 0;
}
.setting-left{
    width: 210px;
    background-color: #f8fafc;
}
.user-cont{
    padding-top: 25px;
    padding-bottom: 25px;
}
.user-mode{
    position: relative;
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    border: 4px solid #d9dde1;
    border-radius: 50px;
    margin: 0 auto;
    text-align: center;
    overflow: hidden;
}
.user-mode img{
    width: 100px;
    height: 100px;
}
.des-mode{
    text-align: center;
    font-size: 16px;
}
.left-list{
    overflow: hidden;
    text-align: left;
}
.left-list h2{
    font-size: 14px;
    line-height: 24px;
    margin: 12px 24px;
    font-weight: 600;
    font-family: Microsoft yahei;
}
.line{
    height: 1px;
    background-color: #d9dde1;
    margin: 0 24px;
}
.menu{
    padding: 10px 0 25px;
}
.setting-left ul li a{
    font-family: icomoon!important;
    display: block;
    position: relative;
    padding: 0 0 0 62px;
    height: 45px;
    line-height: 45px; 
    font-weight: 400;
    /* transition: background-color .3s ease; */
}
.setting-left ul li a:link,a:hover{
    text-decoration: none;
}
.setting-left .router-link-active{
    color: #fff;
    background-color: #48cfad;
}
.setting-left ul li span{
    padding-left: 60px;
}
.setting-right{
    float: left;
    margin-left: 48px;
    width: 840px;
    box-sizing: border-box;
}
.setting-right .toptitle{
    font-size: 16px;
    font-weight: 700;
    font-family: Microsoft yahei;
}
.setting-right .right-write{
    display: inline;
    margin-right: 70px;
}
.right-write a{
    color: #848484;
}
.mybody{
    margin: 24px auto 24px 40px;
}
.mybody .info-box{
    margin-bottom: 12px;
    overflow: hidden;
    display: inline-flex;
    text-align: left;
}
.mybody .info-box label{
    width: 100px;
    line-height: 20px;
    padding: 20px 0;
    text-align: center;
    font-weight: 700;
}
.mybody .info-box div{
    width: 708px;
    margin-left: 8px;
    line-height: 20px;
    padding: 20px 0 20px 22px;
    border-bottom: 1px solid #d9dde1;
}
</style>
<script>
export default {
    name:'settingNavbar',
    data(){
        return {
            nickname:JSON.parse(sessionStorage.getItem('yzInfo')).nickname,
            headlogo:JSON.parse(sessionStorage.getItem('yzInfo')).headlogo,
            settingNav:[{
                href:'./setting',
                text:'个人信息'
            },{
                href:'./binding',
                text:'账号绑定'
            },{
                href:'./identity',
                text:'学籍认证'
            }]
        }
    }
}
</script>

