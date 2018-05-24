<template>
  <div id="secondNavbar">
      <div class="second_header">
		<button type="submit" class="btn btn-default">我要提问</button>
		<ul class="nav nav-tabs" style="padding-left: 200px;">
			<li v-for="(item,index) in navBar" :key="index">
				<router-link :to="item.href">{{item.text}}</router-link>
			</li>
		</ul>
	</div>
          <right-navbar></right-navbar>
  <transition name="fade"><router-view>
      </router-view></transition>
  
  </div>
  
</template>
<script>
    export default{
        data(){
            return {
                navBar:[{
                    text:'推荐',
                    href:'./'
                },{
                    text:'热门话题',
                    href:'hot'
                },{
                    text:'笔记文章',
                    href:'paper'
                },{
                    text:'相关提问',
                    href:'aboutanswer'
                }],
                ind:0
            }
        },
        methods:{
            activeItem(index){
                this.ind=index;
            }
        }
    }
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-active {
    opacity: 0
}
#secondNavbar .router-link-exact-active{
    background: #FFFFFF;
    color: #575757;
}
</style>
