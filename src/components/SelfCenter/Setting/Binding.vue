<template>
    <div id="binding">
        <div class="setting-right">
                    <div class="toptitle l">
                        账号绑定
                    </div>
                    <div class="right-ques r">
                        <img src="static/img\quesblue.png">
                        <a href="#">常见问题</a>
                    </div>
                    <div class="binding">
                        <div class="itembox">
                            <div class="info-left">
                                <img src="static/img/mail.png">
                            </div>
                            <div class="info-center">
                                <p><span class="font1">邮箱</span> 
                                    <span class="font4">未绑定（绑定邮箱可得一积分</span>
                                </p>
                                <p class="font2">可用邮箱加密码登录慕课网，可用邮箱找回密码</p>
                            </div>
                            <div class="info-right">
                                <a href="#">
                                    <button type="button" class="btn btn-default">立即绑定
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div class="itembox">
                                <div class="info-left">
                                    <img src="static/img/phone.png">
                                </div>
                                <div class="info-center">
                                    <p><span class="font1">手机</span> 
                                        <span class="font4" id="123********45">123********45</span>
                                    </p>
                                    <p class="font2">可用手机号加密码登录慕课网，可通过手机号找回密码</p>
                                </div>
                                <div class="info-right">
                                    <a href="#">
                                        <button type="button" class="btn btn-default">更改
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div class="itembox">
                                    <div class="info-left">
                                        <img src="static/img/lock.png">
                                    </div>
                                    <div class="info-center">
                                        <p><span class="font1">密码</span> 
                                            <span class="font4">未绑定（设置密码需要先绑定手机或邮箱）</span>
                                        </p>
                                        <p class="font2">用于保护账号信息和登录安全</p>
                                    </div>
                                    <div class="info-right">
                                        <a href="#">
                                            <button type="button" class="btn btn-default">更改
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div class="creat">
                                        <div class="info-left">
                                            <img src="static/img/contact.png">
                                        </div>
                                        <div class="info-center">
                                            <p class="font1">社交账号</p>
                                            <p class="font2">绑定第三方帐号，可以直接登录，还可以将内容同步到以下平台，与更多好友分享</p>
                                            <div class="accountbox">
                                                <div class="innerbox">
                                                    <div class="left-icon">
                                                        <img src="static/img/weixin.png">
                                                    </div>
                                                    <div class="right-text l">
                                                        <p class="bind-name">微信</p>
                                                        <p class="red ">未绑定</p>
                                                        <a href="#">
                                                            <button type="button" class="btn btn-default">添加绑定
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="innerbox">
                                                    <div class="left-icon l">
                                                        <img src="static/img/weibo.png">
                                                    </div>
                                                    <div class="right-text l">
                                                        <p class="bind-name">微博</p>
                                                        <p class="red ">未绑定</p>
                                                        <a href="#">
                                                            <button type="button" class="btn btn-default">添加绑定
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="innerbox">
                                                    <div class="left-icon">
                                                        <img src="static/img/QQ.png">
                                                    </div>
                                                    <div class="right-text l">
                                                        <p class="bind-name">QQ</p>
                                                        <p class="red">未绑定</p>
                                                        <a href="#">
                                                            <button type="button" class="btn btn-default">添加绑定
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div class="info-right"></div>
                                    </div>
                    </div>
                </div>
    </div>
</template>
<style>
#binding{
    text-align: left;
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
}
.left-list h2{
    font-size: 14px;
    line-height: 24px;
    margin: 12px 24px;
    font-weight: 600;
    font-family: Microsoft yahei;
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
.setting-left .act{
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
.setting-right .right-ques{
    display: inline;
    margin-right: 70px;
}
.right-ques a{
    color: #848484;
}
.binding{
    margin-top: 40px;
}
.itembox{
    height: 88px;
    overflow: hidden;
    margin: auto;
    border-bottom: 1px solid #d9dde1;
}
.creat{
    overflow: hidden;
    margin: auto;
}
.info-left{
    width: 80px;
    float: left;
    font-size: 36px;
    color: #d9dde1;
    line-height: 98px;
    padding-left: 24px;
}
.info-center{
    padding-top: 22px;
    width: 510px;
    float: left;
}
.info-center p{
    line-height: 12px;
    font-size: 12px;
}
.info-center .font1{
    color: #2b333b;
    font-size: 16px;
    font-weight: 700;
}
.info-center .font2{
    color: #2b333b;
    font-size: 14px;
}
.info-center .font3{
    color: #93999f;
    font-size: 14px;
}
.info-center .font4{
    color: #f01414;
    font-size: 14px;
}
.info-right{
    float: right;
    padding-right: 12px;
    margin-top: 28px;
}
.itembox .info-right .btn-default{
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 25px;
    margin-right: 50px;
}
.itembox .info-right .btn-default:link{
    color: #1c1f21;
}
.itembox .info-right .btn-default:hover{
    background-color: #fff;
}
.itembox .info-center .accountbox{
    width: 650px;
    margin-top: 19px;
}
.itembox .info-center .accountbox .innerbox{
    width: 200px;
    float: left;
    margin-right: 24px;
}
.innerbox .right-text .bind-name{
    font-size: 14px;
    font-weight: 700;
}
.innerbox .right-text .red{
    color: #f01414;
}
.innerbox .right-text .btn-default{
    padding: 0;
    display: block;
    width: 62px;
    height: 22px;
    color: #07111b;
    line-height: 22px;
    font-size: 12px;
    border: 1px solid #d9dde1;
}
.innerbox .left-icon{
   float: left;
}
.innerbox .right-text{
  float: left;
}
</style>

