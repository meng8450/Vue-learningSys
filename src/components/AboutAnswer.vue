<template>
  <div id="aboutAnswer">
      <div class="second_header">
		<button type="submit" class="btn btn-default">我要提问</button>
		<ul class="nav nav-tabs">
			<li style="margin-left: 200px;">
				<a href="#/circle">推荐</a>
			</li>
			<li>
				<a href="#/hot">热门话题</a>
			</li>
			<li>
				<a href="#/paper">笔记文章</a>
			</li>
			<li class="active">
				<a href="#/aboutanswer" style='color:#555;'>相关提问</a>
			</li>
		</ul>
	</div>
      <div class="thebody">
    <div class="two_body">
        <div class="ques-answer">
            <div class="tag-img">
                <a href="#" target="_blank">
                    <img src="static/img/cy.png" title="C">
                </a>
            </div>
            <div class="tag-from">
                来自 &nbsp;
                <a href="#" target="_blank">C</a>
            </div>
            <div class="ques-con">
                <a href="#" class="ques-con-content" target="_blank" title="可以给我翻译一下吗？我看不懂">可以给我翻译一下吗？我看不懂</a>
            </div>
            <div class="info-bar clearfix">
                <a href="#" class="to-answer">撰写答案</a>
                <a href="#" class="answer-num">3个回答</a>
                <a href="#" class="follow" data-ques-id="01">关注</a>
            </div>
        </div>
        <div class="ques-answer">
            <div class="tag-img">
                <a href="#" target="_blank">
                    <img src="static/img/js.png" title="JavaScript">
                </a>
            </div>
            <div class="from-tag"> 来自&nbsp;
                <a href="#" target="_blank">JavaScript</a>&nbsp;
                <a href="#" target="_blank">JAVA</a>
            </div>
            <div class="ques-con">
                <a href="#" class="ques-con-content" target="_blank" title="我是一名大三出来实习的计算机专业的学生 &nbsp;大学课程没认真学 &nbsp;出来实习找不到这方面的实习 我现在想学java ，有没有大牛给我一点指导性意见 &nbsp;或者给我发一点关于java的学习资料">想入门学java</a>
            </div>
            <div class="answer-con first" data-answer-id="001" id="answer-con">
                <div class="user">
                    <a href="#" target="_blank">半枯</a>
                    <span class="signature">回答：</span>
                </div>
                <div class="answer-content">学java一般都是去写后台,所以不能只停留在java一门语言的层面.1.java基础,对象精通,api肯定要了解一些,像string io流,多线程等等2.前端要看的懂,所以对前端也要一定的了解,3.数据库,但凡后台一定涉及到数据,4.框架,框架我还没学,本人在正前三阶段,5.项目,在项目方法,本人已经做了几个java小项目,如何做项目一定要学的,资料的话慕课里面的视频已经提供很多了,其他遇到不懂得,要多思考多百度,
                    <span
                        class="see-more">[ 查看全部 ]</span>
                </div>
                <div class="answer-content-all rich-text aimgPreview">
                    <p>学java一般都是去写后台,所以不能只停留在java一门语言的层面.</p>
                    <p>1.java基础,对象精通,api肯定要了解一些,像string io流,多线程等等</p>
                    <p>2.前端要看的懂,所以对前端也要一定的了解,</p>
                    <p>3.数据库,但凡后台一定涉及到数据,</p>
                    <p>4.框架,框架我还没学,本人在正前三阶段,</p>
                    <p>5.项目,在项目方法,本人已经做了几个java小项目,如何做项目一定要学的,</p>
                    <p>资料的话慕课里面的视频已经提供很多了,其他遇到不懂得,要多思考多百度,</p>
                </div>
                <div class="ctrl-bar clearfix">
                    <span class="agree-with " data-ques-id="02" data-answer-id="001" data-hasop>
                        <b>已帮助用户</b>
                        <em>2</em>
                    </span>
                    <span class="oppose " data-ques-id="02" data-answer-id="001" data-hasop>
                        <em>0人反对</em>
                    </span>
                    <div class="share-box clearfix">
                        <div class="show-btn">分享</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="me_form">
    <ul class="list-group">
        <li class="list-group-item"><a href="#"><img src=static/img/collect.png></a>我的收藏</li>
        <li class="list-group-item"><a href="#"><img src=static/img/question.png></a>我关注的问题</li>
        <li class="list-group-item"><a href="#"><img src=static/img/news.png></a>
            <span class="badge">新</span>我的消息
        </li>
        <li class="list-group-item"><a href="#"></a><img src=static/img/recover.png>浏览记录</li>
    </ul>
    <div class="adver">
        <p>广告位</p>
    </div>
  </div>
  </div>
</template>
<style scoped>
#aboutAnswer{
min-height: 100vh;
}
</style>

