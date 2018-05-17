<template>
  <div id="rightNavbar">
          <div class="me_form">
        <div class="write_paper" v-show="urls.some((item)=>{return item===this.$route.path})">
            <p>学习发现，发现自我</p>
            <button type="button" class="btn btn-default">发布笔记</button>
        </div>
        <ul class="list-group">
            <li class="list-group-item">
                <a href="#">
                    <img src=static\img\collect.png>
                </a>我的收藏</li>
            <li class="list-group-item">
                <a href="#">
                    <img src=static\img\question.png>
                </a>我关注的问题</li>
            <li class="list-group-item">
                <a href="#">
                    <img src=static\img\news.png>
                </a>
                <span class="badge">新</span>我的消息
            </li>
            <li class="list-group-item">
                <a href="#"></a>
                <img src=static\img\recover.png>浏览记录</li>
        </ul>
        <div class="adver">
            <p>广告位</p>
        </div>
    </div>
  </div>
</template>
<script>
    export default{
        name:'RightNavbar',
        data(){
            return {
                urls:['/circle/paper','/circle/aboutanswer'],
            }
        },
    }
</script>
<style scoped>
.me_form {
    text-align: left!important;
    margin-left: 0!important;
    float: right!important;
    position: absolute;
    right: 8rem;
}
.thebody{
    width: auto!important;
    float: left!important;
    text-align: left!important;
    position: relative!important;
}
</style>

