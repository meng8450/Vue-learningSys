<template>
<div id="user" class="main">
    <div class="myheader">
        <div class="user-info">
            <div class="user-information">
                <div class="user-img">
                    <img :src="picUrl">
                </div>
            </div>
            <div class="user-right r">
                <h3 class="user-name l">
                    {{nickname}}
                </h3><br>
                <span>{{school}}  &nbsp;&nbsp;{{identity}}</span>
                <p class="about-info"></p>
                <div class="setup r">
                    <button type="button" class="btn btn-default"><a :href="'#/user/'+userid+'/setting'"><img src="static\img\setup.png">&nbsp;个人设置</a></button>
                </div>
            </div>
        </div>
    </div>
        <div class="work">
        <div class="left-span">
            <ul>
                <li v-for="(item,index) in stuBar" v-if="power==='0'" :key="index">
                    <router-link :to="item.href">
                        <i :class="item.class"></i>
                        <span>{{item.text}}</span>
                    </router-link>
                </li>
                <li v-for="(item,index) in teaBar" v-if="power==='1'" :key="index">
                    <router-link :to="item.href">
                        <i :class="item.class"></i>
                        <span>{{item.text}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        </div>
        <transition name="fade"><router-view></router-view></transition>
    </div>
</template>
<script>
export default {
    data(){
        return {
            nickname:'',
            picUrl:'',
            identity:'',
            school:'',
            userid:'',
            ind:0,
            power:'',
            stuBar:[{
                href:'./',
                class:"fa fa-user",
                text:"我的课程"
            },{
                href:'./work',
                class:"fa fa-flask",
                text:"综合实训"
            },{
                href:'./mission',
                class:"fa fa-clipboard",
                text:"我的任务"
            },{
                href:'./grade',
                class:"fa fa-search",
                text:"成绩查询"
            },{
                href:'./skill',
                class:"fa fa-thumbs-up",
                text:"能力档案"
            },{
                href:'./news',
                class:"fa fa-newspaper-o",
                text:"新闻资讯"
            }],
            teaBar:[{
                href:'./',
                class:"fa fa-user",
                text:"课程管理"
            },{
                href:'./work',
                class:"fa fa-flask",
                text:"综合实训"
            },{
                href:'./mission',
                class:"fa fa-clipboard",
                text:"任务管理"
            },{
                href:'./grade',
                class:"fa fa-search",
                text:"数据分析"
            },{
                href:'./skill',
                class:"fa fa-thumbs-up",
                text:"能力档案"
            }]
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            if(sessionStorage.getItem('yzInfo')){
            let info1=JSON.parse(sessionStorage.getItem('yzInfo'));
            this.picUrl=info1.headlogo;
            this.nickname=info1.nickname;
            this.identity=info1.identity;
            this.school=info1.school;
            this.userid=info1.userid;
            this.power=info1.power;
            }else{
                this.$notify({
          title: '非法操作',
          message: '尚未登录...',
          position: 'top-right',
          type:'warning',
          duration: 1000
        });
                // this.$router.push({path:'/'});
                history.go(-1);
            }
        })
  },
  watch:{
    $route(to,from){
      console.log(to,from);
      if(to.params.id!==JSON.parse(sessionStorage.getItem('yzInfo')).userid){
          this.$notify({
          title: '非法操作',
          message: '权限错误...',
          position: 'top-right',
          type:'warning',
          duration: 1000
        });
            this.$router.push({path:'/'});
      }
    }
  }
}
</script>
<style scoped>
.main{
    min-height: 100vh!important;
}

.fade-enter-active, .fade-leave-active {
        transition: opacity .5s
      }
      .fade-enter, .fade-leave-active {
        opacity: 0
      }
      #user .router-link-exact-active{
        color: #fff;
        background: #48cfad!important;
        border-radius: 8px 0 0 8px;
      }
</style>
