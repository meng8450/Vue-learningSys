<template>
 <div id="indexPage">
   <!-- 模态框（Modal） -->
<!--轮播图-->
    <div id="myCarousel" class="carousel slide">
            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
              <li data-target="#myCarousel" data-slide-to="4"></li>
            </ol>
            <!-- Carousel items -->
            <div class="carousel-inner" id="owl-box" style="width: 100%; height:550px;">
              <div class="item" v-for="(item,index) in lunbo" :class="{ active: item.active }" :key="index"><a class="itemPhoto">
                    <img v-lazy="item.picUrl" alt="">
                </a></div>
            </div>
            <!-- Carousel nav -->
            <a class="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
            <a class="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>
          </div>
    
    <div class="main-index mc">
        <!--项目栏-->
        <table class="item mc">
            <tr>
                <td v-for="(item,index) in fourItems" :key="index">
                    <a :href="'#'+item.href" duration="1500" easing="smooth" :scrollTo="item.href" class="scrollOnClick">
                        <span class="square colorGreen">
                            <img v-lazy="item.src">
                            <p>{{item.text}}</p>
                        </span>
                    </a>
                </td>
               

            </tr>
        </table>

        <!--课程区-->
        <div class="title">
            <h2>
                <strong>优质课程</strong>
            </h2>
            <h5>丰富的课内外教程，海量教育资源供您选择</h5>
            <hr>
            <img src="/static/img/jiaoyu.png">
            <hr>
        </div>
<hr id="yzkc">
        <table class="lessonShow" v-for="(items,index) in lessonsShow" :key="index">
            <tr>
                <td v-for="(item,index) in items" :key="index">
                    <a href="#" target="_blank">
                    <span class="lessonBox">
                        <img v-lazy="item.src">
                        <strong>
                            <p class="text-left fs18">{{item.text}}</p>
                        </strong>
                        <span>
                            <img src="/static/img/people.png">
                        </span>
                    </span>
                </a>
                </td>
            </tr>
        </table>

        <div class="more">
            <a href="#/classes" target="_blank">更多</a>
        </div>

        <!--实训区-->
        <div class="title">
            <h2>
                <strong>实训课程</strong>
            </h2>
            <h5>丰富的课内外教程，海量教育资源供您选择</h5>
            <hr>
            <img src="/static/img/run.png">
            <hr>
        </div>
        <div class="lessonAdv mc">
            <span class="lessonAdv1">
                <h3>
                    <small class="fcw">人工智能？首选Python</small>
                </h3>
            </span>
            <span class="lessonAdv2">
                <h3>
                    <small class="fcw">跳槽？面试？稳住！别慌！</small>
                </h3>
            </span>
        </div>

        <table class="lessonShow">
            <tr>
                <td>
                        <a href="#" target="_blank">
                    <span class="lessonBox">
                        <img src="/static/img/jsjzc.jpg">
                        <strong>
                            <p class="text-left fs18">计算机组成与系统结构</p>
                        </strong>
                        <span>
                            <img src="/static/img/teacher.png">
                        </span>
                    </span></a>

                </td>
                <td>
                        <a href="#" target="_blank">
                    <span class="lessonBox">
                        <img src="/static/img/jsjwl.jpg">
                        <strong>
                            <p class="text-left fs18">计算机网络应用</p>
                        </strong>
                        <span>
                            <img src="/static/img/teacher.png">
                        </span>

                    </span></a>
                </td>
                <td>
                        <a href="#" target="_blank">
                    <span class="lessonBox">
                        <img src="/static/img/jsjyy.jpg">
                        <strong>
                            <p class="text-left fs18">计算机应用基础</p>
                        </strong>
                        <span>
                            <img src="/static/img/teacher.png">
                        </span>
                    </span></a>
                </td>
            </tr>
        </table>

        <table class="lessonShow" id="sxkc">
            <tr>
                <td><a href="#" target="_blank">
                    <span class="lessonBox">
                        <img src="/static/img/jsjwlaq.jpg">
                        <strong>
                            <p class="text-left fs18">计算机网络安全</p>
                        </strong>
                        <span>
                            <img src="/static/img/teacher.png">
                        </span>
                    </span></a>

                </td>
                <td>
                        <a href="#" target="_blank">
                    <span class="lessonBox">
                        <img src="/static/img/xmfx.png">
                        <strong>
                            <p class="text-left fs18">项目分析与创业计划</p>
                        </strong>
                        <span>
                            <img src="/static/img/teacher.png">
                        </span>

                    </span></a>
                </td>
                <td><a href="#" target="_blank">
                    <span class="lessonBox">
                        <img src="/static/img/hlwyx.png">
                        <strong>
                            <p class="text-left fs18">互联网营销策略实务</p>
                        </strong>
                        <span>
                            <img src="/static/img/teacher.png">
                        </span>
                    </span></a>
                </td>
            </tr>
        </table>

        <div class="more">
            <a href="#/classes" target="_blank">更多</a>
        </div>
        <!--资讯区-->
        <div class="title">
            <h2>
                <strong>新闻公告</strong>
            </h2>
            <h5>丰富的课内外教程，海量教育资源供您选择</h5>
            <hr>
            <img src="/static/img/newsi.png">
            <hr>
        </div>

        <div class="newsBox mc">
            <span class="newsImg">
                <img src="/static/img/new1.jpg">
            </span>
            <span class="newsText">
                <a href="#">10个用Java谋生非常有趣的方式，你要尝试哪个？</a>
                <p class="text-left">令我惊讶的是，有些人觉得编程并不令人兴奋——只将它当作是一份枯燥的工作。不过，虽然可能的确有很多无聊的编程工作，但这并不意味着你不得不接受这些工作中的一个。程序员有各种各样的机会，运用他们的技能去做一些有趣的事情，特别是如果他们懂Java的话。</p>
                <span id="newTime">
                    <p>2018-04-15 22:28:25</p>
                </span>
            </span>
        </div>
        <div class="newsBox mc">
            <span class="newsImg">
                <img src="/static/img/new2.jpeg">
            </span>
            <span class="newsText">
                <a href="#">开发者福利：TensorFlow 中文社区论坛测试版正式上线</a>
                <p class="text-left">4 月 13 日，谷歌与 Caicloud (才云) 联合发起和创建的 TensorFlow 中文社区论坛测试版（https://www.tensorflowers.cn）正式上线。 从谷歌发布 TensorFlow
                    中文网站（tensorflow.google.cn），再到建立 TensorFlow 微信公众号，到现在中文社区论坛上线，可以看到，他们正致力于在中国打造更加庞大的 TensorFlow 开发者社群。</p>
                <span id="newTime">
                    <p>2018-04-15 21:49</p>
                </span>
            </span>
        </div>
        <div class="newsBox mc" id="xwgg">
            <span class="newsImg">
                <img src="/static/img/new3.png">
            </span>
            <span class="newsText">
                <a href="#">Windows 的 Linux 子系统现已支持“复制/粘贴”操作</a>
                <p class="text-left">到目前为止，用户对于 Windows 上的 Linux 子系统(WSL)最期待的功能之一是，在控制台中支持“复制/粘贴”文本内容。 对于那些在 Windows 上进行开发工作并使用 WSL 的用户来说，考虑到这是一个相当基本的功能，工作上如果没有“复制/粘贴”功能的支持，事情会有点麻烦。</p>
                <span id="newTime">
                    <p>2018-04-15 21:49</p>
                </span>
            </span>

        </div>

        <!--学友圈-->
        <div class="title">
            <h2>
                <strong>学友交流</strong>
            </h2>
            <h5>丰富的课内外教程，海量教育资源供您选择</h5>
            <hr>
            <img src="/static/img/chat2.png">
            <hr>
        </div>
        <div class="chat mc clearfix" id="xyq">
            <div class="chatLeft">
                <div class="chatLeft1 ">
                    <span class="btn-success badge">热门话题</span>
                    <strong>
                        <a href="">#成为Python DevOps工程师有哪些必备条件#</a>
                    </strong>
                    <p>确实是，培训行业反应的是现状，python语言被广泛应用在运维自动化行业。如果单纯想转运维也存在一些夸大其词。 另外，如果想转作运维，是不是python的学习优先级很高，这个我觉得得取决于个人得基础能力。如果有开发基础或者说很好学习能力，那我觉得首先需要重点了解操作系统、数据库、应用服务、网络等相关技术。等了解清楚了运维工作的相关技术，再去学习python或者一门语言。
                        最后，我觉得运维工程师还是会向自动化运维或者devops行业发展。掌握一门语言得开发能力会是将来谋求长远发展得关键。
                    </p>
                    <a href="">
                        <p class="text-right fs14">了解详情>> </p>
                    </a>

                    <hr>
                    <strong>
                        <a href="">#如何使用Python实现自动化运维？#</a>
                    </strong>
                    <p>1.ZabbixZabbix是一个基于WEB界面的提供分布式系统监控以及网络监控功能的企业级开源运维平台，也是目前国内互联网用户中使用最广的监控软件。2.NagiosNagios原名NetSaint，是一款开源的企业级监控系统，于1999年推出，由Ethan
                        Galstad开发并维护至今。Nagios能够实现对系统CPU、磁盘、网络等方面参数的基本系统监控，而且还能监控包括SMTP，POP3，HTTP，NNTP等各种基本的服务类型。另外通过安装插件和编写监控脚本，用户可以实现应用监控，并针对大量的监控主机和多个对象部署层次化监控架构。3.CactiCacti是一套完整的网络流量监测图形分析解决
                    </p>
                    <a href="">
                        <p class="text-right fs14">了解详情>>
                        </p>
                    </a>
                    <div class="hrBack">
                        <hr>
                        <span>往期回顾</span>
                    </div>
                    <div class="topicBack">
                        <a href="">#对于现代前端必备技能Node.js，有什么想说的吗#</a>
                        <a href="">#如何开发前后端分离的系统#</a>
                        <a href="">#被攻击？要提升？请优化移动端网站体验+性能#</a>
                        <a href="">#对于现代前端必备技能Node.js，有什么想说的吗#</a>
                        <a href="">#如何开发前后端分离的系统#</a>
                    </div>
                    <a href="">
                        <p class="text-right fs14">更多往期话题>></p>
                    </a>
                </div>
                <div class="chatLeft2">
                    <span class="btn-success badge">
                        <img src="/static/img/ques.png">相关提问</span>
                    <h3>这里面适合女生的课程是哪些？</h3>
                </div>
            </div>
            <div class="chatRight">
                <div class="chatRight1">
                    <span><img src="/static/img/biji.png">笔记文章</span>
                    <a href="">
                        <h4>从零开始实现React(一)：JSX和虚拟DOM</h4>
                    </a>
                    <p></p>
                    <div class="textFoot">
                        <span>浏览</span>
                        <span>推荐</span>
                        <a href="">阅读全文>></a>
                    </div>
                </div>
                <div class="chatRight2">
                    <span>
                        <img src="/static/img/biji.png">笔记文章</span>
                        <a href="">
                            <h4>从零开始实现React(一)：JSX和虚拟DOM</h4>
                        </a>
                        <p></p>
                        <div class="textFoot">
                            <span>浏览</span>
                            <span>推荐</span>
                            <a href="">阅读全文>></a>
                        </div>

                </div>
                <div class="chatRight3">
                    <span>
                        <img src="/static/img/biji.png">笔记文章</span>
                        <a href="">
                            <h4>从零开始实现React(一)：JSX和虚拟DOM</h4>
                        </a>
                        <p></p>
                        <div class="textFoot">
                            <span>浏览</span>
                            <span>推荐</span>
                            <a href="">阅读全文>></a>
                        </div>
              </div>
            </div>
        </div>
        <div class="more">
            <a href="#" target="_blank">更多</a>
        </div>
    </div>
    </div></template>

<script>
let indexData=require('../../static/mock/indexData.json');
export default {
  name: 'IndexPage',
  data () {
    return indexData
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
b, strong {
    /* font-weight: bold; */
    word-break: keep-all!important;
}
.carousel-control {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 15%;
    font-size: 60px;
    color: #fff;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
    background-color: rgba(0, 0, 0, 0);
    filter: alpha(opacity=50);
    opacity: .5;
    line-height: 550px;
    height: 550px;
}
.carousel-control .left:hover {
    /* background-image: linear-gradient(to right, rgba(0, 0, 0, 0.96) 0%, rgba(0, 0, 0, .0001) 100%);
    background-repeat: repeat-x; */
    background: black!important;
}
</style>
