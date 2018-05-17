<template>
  <div id="secondNavbar">
      <div class="second_header">
		<button type="submit" class="btn btn-default">我要提问</button>
		<ul class="nav nav-tabs" style="padding-left: 200px;">
			<li v-for="item,index in navBar" :class="{'active':ind === index}">
				<a :href="item.href" @click="activeItem(index)">{{item.text}}</a>
			</li>
		</ul>
	</div>
  <transition name="fade"><router-view></router-view></transition>
  </div>
  
</template>
<script>
    export default{
        data(){
            return {
                navBar:[{
                    text:'推荐',
                    href:'#/circle'
                },{
                    text:'热门话题',
                    href:'#/circle/hot'
                },{
                    text:'笔记文章',
                    href:'#/circle/paper'
                },{
                    text:'相关提问',
                    href:'#/circle/aboutanswer'
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
      .active a{
          color: #555!important;
      }
</style>
