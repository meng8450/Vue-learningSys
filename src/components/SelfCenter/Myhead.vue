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
                    <a :href="item.href" @click="activeItem(index)" :class="{'active':ind===index}">
                        <i :class="item.class"></i>
                        <span>{{item.text}}</span>
                    </a>
                </li>
                <li v-for="(item,index) in teaBar" v-if="power==='1'" :key="index">
                    <a :href="item.href" @click="activeItem(index)" :class="{'active':ind===index}">
                        <i :class="item.class"></i>
                        <span>{{item.text}}</span>
                    </a>
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
            stuBar:'',
            teaBar:''
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            if(sessionStorage.getItem('yzInfo')){
            this.stuBar=[{
                href:`#/user/${JSON.parse(sessionStorage.getItem('yzInfo')).userid}`,
                class:"fa fa-user",
                text:"我的课程"
            },{
                href:`#/user/${JSON.parse(sessionStorage.getItem('yzInfo')).userid}/work`,
                class:"fa fa-flask",
                text:"综合实训"
            },{
                href:`#/user/${JSON.parse(sessionStorage.getItem('yzInfo')).userid}/mission`,
                class:"fa fa-clipboard",
                text:"我的任务"
            },{
                href:`#/user/${JSON.parse(sessionStorage.getItem('yzInfo')).userid}/grade`,
                class:"fa fa-search",
                text:"成绩查询"
            },{
                href:`#/user/${JSON.parse(sessionStorage.getItem('yzInfo')).userid}/skill`,
                class:"fa fa-thumbs-up",
                text:"能力档案"
            },{
                href:`#/user/${JSON.parse(sessionStorage.getItem('yzInfo')).userid}/news`,
                class:"fa fa-newspaper-o",
                text:"新闻资讯"
            }];
            this.teaBar=[{
                href:`#/user/${JSON.parse(sessionStorage.getItem('yzInfo')).userid}`,
                class:"fa fa-user",
                text:"课程管理"
            },{
                href:`#/user/${JSON.parse(sessionStorage.getItem('yzInfo')).userid}/work`,
                class:"fa fa-flask",
                text:"综合实训"
            },{
                href:`#/user/${JSON.parse(sessionStorage.getItem('yzInfo')).userid}/mission`,
                class:"fa fa-clipboard",
                text:"任务管理"
            },{
                href:`#/user/${JSON.parse(sessionStorage.getItem('yzInfo')).userid}/grade`,
                class:"fa fa-search",
                text:"数据分析"
            },{
                href:`#/user/${JSON.parse(sessionStorage.getItem('yzInfo')).userid}/skill`,
                class:"fa fa-thumbs-up",
                text:"能力档案"
            }];
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
  methods:{
      activeItem(index){
                this.ind=index;
            }
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
.active{
    color: #fff;
    background: #99CCFF;
    border-radius: 8px 0 0 8px;
}
.fade-enter-active, .fade-leave-active {
        transition: opacity .5s
      }
      .fade-enter, .fade-leave-active {
        opacity: 0
      }
</style>
