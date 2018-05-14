<template>
  <div id="paper">
      <div class="second_header">
		<button type="submit" class="btn btn-default">我要提问</button>
		<ul class="nav nav-tabs">
			<li style="margin-left: 200px;">
				<a href="#/circle">推荐</a>
			</li>
			<li>
				<a href="#/hot">热门话题</a>
			</li>
			<li class="active">
				<a href="#/paper" style='color:#555;'>笔记文章</a>
			</li>
			<li>
				<a href="#/aboutanswer">相关提问</a>
			</li>
		</ul>
	</div>
    <div class="container-fluid">
      <div class="thebody">
        <ul class="paper-box">
            <li class="paper clearfix">
                <a href="#" target="_blank">
                    <img class="paper-img" src="static\img\paper-2.png">
                </a>
                <div class="paper-content">
                    <p class="paper-title">
                        <a href="#" target="_blank" title="优化反射性能的总结（中）">优化反射性能的总结（中）</a>
                    </p>
                    <p class="paper-desc" title="摘要：问题回顾在上篇博客中，我介绍了优化反射的第一个步骤：用委托调用代替直接反射调用。然而，那只是反射优化过程的开始，因为新的问题出现了">
                        摘要：问题回顾在上篇博客中，我介绍了优化反射的第一个步骤：用委托调用代替直接反射调用。然而，那只是反射优化过程的开始，因为新的问题出现了：接下来我们需要讨论解决的是
                    </p>
                    <div class="detail clearfix">
                        <div class="detail-left">
                            <div class="guest-box">
                                <a href="#" target="_blank" class="l guest ">
                                    <img class="guest" data-userid="1001" src="static\img\guest1.jpg" alt="">
                                </a>
                                <span class="l" style="margin-left: 10px;" data-userid="1001">如果我有鸡翅膀</span>
                            </div>
                        </div>
                            <span class="l" style="margin-left:20px; " data-beforetime="20180417">3个小时前</span>
                            <div class="r">
                                <span>浏览-></span>
                            </div>
                    </div>
                </div>
            </li>
        </ul>
        <ul class="paper-box">
            <li class="paper clearfix">
                <a href="#" target="_blank">
                    <img class="paper-img" src="static\img\paper-2.png">
                </a>
                <div class="paper-content">
                    <p class="paper-title">
                        <a href="#" target="_blank" title="优化反射性能的总结（中）">优化反射性能的总结（中）</a>
                    </p>
                    <p class="paper-desc" title="摘要：问题回顾在上篇博客中，我介绍了优化反射的第一个步骤：用委托调用代替直接反射调用。然而，那只是反射优化过程的开始，因为新的问题出现了">
                        摘要：问题回顾在上篇博客中，我介绍了优化反射的第一个步骤：用委托调用代替直接反射调用。然而，那只是反射优化过程的开始，因为新的问题出现了：接下来我们需要讨论解决的是
                    </p>
                    <div class="detail clearfix">
                        <div class="detail-left">
                            <div class="guest-box">
                                <a href="#" target="_blank" class="l guest ">
                                    <img class="guest" data-userid="1001" src="static\img\guest1.jpg" alt="">
                                </a>
                                <span class="l" style="margin-left: 10px;" data-userid="1001">如果我有鸡翅膀</span>
                            </div>
                        </div>
                            <span class="l" style="margin-left:20px; " data-beforetime="20180417">3个小时前</span>
                            <div class="r">
                                <span>浏览-></span>
                            </div>
                    </div>
                </div>
            </li>
        </ul>
        <ul class="paper-box">
            <li class="paper clearfix">
                <a href="#" target="_blank">
                    <img class="paper-img" src="static\img\paper-2.png">
                </a>
                <div class="paper-content">
                    <p class="paper-title">
                        <a href="#" target="_blank" title="优化反射性能的总结（中）">优化反射性能的总结（中）</a>
                    </p>
                    <p class="paper-desc" title="摘要：问题回顾在上篇博客中，我介绍了优化反射的第一个步骤：用委托调用代替直接反射调用。然而，那只是反射优化过程的开始，因为新的问题出现了">
                        摘要：问题回顾在上篇博客中，我介绍了优化反射的第一个步骤：用委托调用代替直接反射调用。然而，那只是反射优化过程的开始，因为新的问题出现了：接下来我们需要讨论解决的是
                    </p>
                    <div class="detail clearfix">
                        <div class="detail-left">
                            <div class="guest-box">
                                <a href="#" target="_blank" class="l guest ">
                                    <img class="guest" data-userid="1001" src="static\img\guest1.jpg" alt="">
                                </a>
                                <span class="l" style="margin-left: 10px;" data-userid="1001">如果我有鸡翅膀</span>
                            </div>
                        </div>
                            <span class="l" style="margin-left:20px; " data-beforetime="20180417">3个小时前</span>
                            <div class="r">
                                <span>浏览-></span>
                            </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="me_form">
        <div class="write_paper">
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
  </div>
</template>
<style scoped>
#paper{
    min-height: 100vh;
}
.thebody {
    width: 880px;
    float: left;
    margin-left: 50px;
}
.paper-content {
    margin-top: -20px;
}
</style>
