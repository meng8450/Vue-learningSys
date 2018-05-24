<template>
    <div id="identity">
        <div class="setting-right">
                    <div class="toptitle l">
                        学籍认证
                    </div>
                    <div class="mycontent">
                        <div class="myform">
                            <div class="myinfo">
                                所有填写信息必须与学籍证明相同，如填写错误将无法通过
                            </div>
                            <div class="ingroup">
                                <div class="inlabel">姓名：</div>
                                <div class="myinput">
                                    <input type="text" placeholder="输入您的真实姓名" class="realname" maxlength="10" name="realname">
                                </div>
                            </div>
                            <div class="ingroup">
                                <div class="inlabel">院校名称：</div>
                                <div class="myinput">
                                    <input type="text" placeholder="输入您所在院校的名称" class="schoolname" name="schoolname" maxlength="20">
                                </div>
                            </div>
                            <div class="ingroup">
                                <div class="inlabel">入学时间：</div>
                                <div class="myinput">
                                    <select id="" name="schooltime" hidefocus="true">
                                        <option value="">请选择</option>
                                        <option value="2000">2000</option>
                                        <option value="2001">2001</option>
                                        <option value="2002">2002</option>
                                        <option value="2003">2003</option>
                                        <option value="2004">2004</option>
                                        <option value="2005">2005</option>
                                        <option value="2006">2006</option>
                                        <option value="2007">2007</option>
                                        <option value="2008">2008</option>
                                        <option value="2009">2009</option>
                                        <option value="2010">2010</option>
                                        <option value="2011">2011</option>
                                        <option value="2012">2012</option>
                                        <option value="2013">2013</option>
                                        <option value="2014">2014</option>
                                        <option value="2015">2015</option>
                                        <option value="2016">2016</option>
                                        <option value="2017">2017</option>
                                        <option value="2018">2018</option>
                                    </select>
                                </div>
                            </div>
                            <div class="ingroup">
                                <div class="inlabel">院校名称：</div>
                                <div class="myinput">
                                    <select id="" name="education" hidefocus="true">
                                        <option value="">请选择</option>
                                        <option value="2">大专</option>
                                        <option value="1">本科</option>
                                        <option value="3">研究生</option>
                                    </select>
                                </div>
                            </div>
                            <div class="ingroup">
                                <div class="inlabel">学籍号：</div>
                                <div class="myinput">
                                    <input type="text" placeholder="输入您的学籍号" class="studentnumber" name="studentnumber" maxlength="20">
                                </div>
                            </div>
                            <div class="ingroup">
                                    <div class="inlabel"></div>
                                    <div class="myinput">
                                            <button type="button" class="btn btn-default mysubmit">提交审核
                                            </button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
    </div>
</template>
<style>
#identity{
    text-align: left;
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
.setting-right .mycontent{
    padding: 48px;
}
.setting-right .mycontent .myform{
    width: 700px;
}
.myform .myinfo{
    font-size: 12px;
    color: #ff9600;
    line-height: 12px;
}
.myform .ingroup{
    margin-top: 24px;
    position: relative;
    display: flex;
}
 .myform .inlabel{
    width: 80px;
    text-align: left; 
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    font-weight: 700;
    color: #07111b;
} 
.myform .realname{
    width: 160px;
}
.myform .schoolname{
    width: 200px;
}
.myform select{
    width: 120px;
}
.myform .studentnumber{
    width: 180px;
}
.myform input,.myform select{
    display: block;
    height: 36px;
    border: 1px solid #d9dde1;
    box-sizing: border-box;
    padding: 0 10px;
    font-size: 12px;
    color: #4d555d;
    border-radius: 5px;
}
.ingroup .myinput{
    float: left;
}
input{
    font-family: Microsoft yahei;
}
option {
    font-weight: normal;
    display: block;
    white-space: pre;
    min-height: 1.2em;
    padding: 0px 2px 1px;
}
.ingroup .mysubmit{
    width: 88px;
    height: 36px;
    line-height: 24px;
}
.ingroup .btn-default{
    color: #fff;
    background-color:#48cfad;
    border-color: #48cfad;
    border-radius: 50px;
}
</style>

