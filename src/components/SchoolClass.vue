<template>
  <div id="schoolClass">
       <div class="main-class mc">
        <div class="crumb">
            <ul class="breadcrumb">
                <li>
                    <a href="#/">首页</a>
                    <span class="divider"></span>
                </li>
                <li>
                    <a href="#/classes">全部课程</a>
                    <span class="divider"></span>
                </li>
                <li class="active">校内课堂</li>
            </ul>
        </div>
        <div class="class-Fliter">
            <table>
                <tr>
                    <td>
                        <a href="#/classes">
                            <span class="colorYellow">全部</span>
                        </a>
                    </td>
                    <td>
                        <a href="#/schoolclass/ITclass">
                            <span>计算机</span>
                        </a>
                    </td>
                    <td>
                        <a href="#/">
                            <span>经济管理</span>
                        </a>
                    </td>
                    <td>
                        <a href="#">
                            <span>心理学</span>
                        </a>
                    </td>
                    <td>
                        <a href="#">
                            <span>外语</span>
                        </a>
                    </td>
                    <td>
                        <a href="#">
                            <span>文学历史</span>
                        </a>
                    </td>
                    <td>
                        <a href="#">
                            <span>医学</span>
                        </a>
                    </td>

                </tr>
                <tr>
                    <td>
                        <a href="#">
                            <span>艺术设计</span>
                        </a>
                    </td>

                    <td>
                        <a href="#">
                            <span>工学</span>
                        </a>
                    </td>
                    <td>
                        <a href="#">
                            <span>理学</span>
                        </a>
                    </td>

                    <td>
                        <a href="#">
                            <span>哲学</span>
                        </a>
                    </td>
                    <td>
                        <a href="#">
                            <span>法学</span>
                        </a>
                    </td>
                    <td>
                        <a href="#">
                            <span>教育学</span>
                        </a>
                    </td>
                    <td>
                        <a href="#">
                            <span>其他</span>
                        </a>
                    </td>
                </tr>
            </table>
        </div>
        <div class="classitem">
            <a href="#/lesson/1" target="_blank">
                <img v-lazy="src">
                <span>
                    <h4>office高级应用</h4>
                    <p id="classSchool">成都信息工程大学</p>
                    <p id="classTea"> 张伟利 、 何钰娟 、 朱烨 、 曾琼 、 赵吉武 、 谯雪梅 、 石远志 、 吴四九 、 羊裔高</p>
                    <p id="classAbs">本课程以全国计算机等级考试“二级MS Office高级应用”考试大纲为基础，结合日常办公应用需求而有所扩展，讲解最常用的Word、Excel、PowerPoint三个应用组件，让学习者较系统地掌握Office的科学用法，在实际工作中能高质、高效使用Office解决问题，做到事半功倍，同时有助于顺利通过等级考试。
                    </p>
                </span>
            </a>
        </div>
        <div class="classitem">
            <a href="#" target="_blank">
                <img v-lazy="src">
                <span>
                    <h4>office高级应用</h4>
                    <p id="classSchool">成都信息工程大学</p>
                    <p id="classTea"> 张伟利 、 何钰娟 、 朱烨 、 曾琼 、 赵吉武 、 谯雪梅 、 石远志 、 吴四九 、 羊裔高</p>
                    <p id="classAbs">本课程以全国计算机等级考试“二级MS Office高级应用”考试大纲为基础，结合日常办公应用需求而有所扩展，讲解最常用的Word、Excel、PowerPoint三个应用组件，让学习者较系统地掌握Office的科学用法，在实际工作中能高质、高效使用Office解决问题，做到事半功倍，同时有助于顺利通过等级考试。
                    </p>
                </span>
            </a>
        </div>
        <div class="classitem">
            <a href="#" target="_blank">
                <img v-lazy="src">
                <span>
                    <h4>office高级应用</h4>
                    <p id="classSchool">成都信息工程大学</p>
                    <p id="classTea"> 张伟利 、 何钰娟 、 朱烨 、 曾琼 、 赵吉武 、 谯雪梅 、 石远志 、 吴四九 、 羊裔高</p>
                    <p id="classAbs">本课程以全国计算机等级考试“二级MS Office高级应用”考试大纲为基础，结合日常办公应用需求而有所扩展，讲解最常用的Word、Excel、PowerPoint三个应用组件，让学习者较系统地掌握Office的科学用法，在实际工作中能高质、高效使用Office解决问题，做到事半功倍，同时有助于顺利通过等级考试。
                    </p>
                </span>
            </a>
        </div>
    </div>
    <div class="pagi mc">
        <ul class="pagination ">
            <li class="disabled">
                <a href="#">&laquo;</a>
            </li>
            <li class="active">
                <a href="#">1</a>
            </li>
            <li>
                <a href="#">2</a>
            </li>
            <li>
                <a href="#">3</a>
            </li>
            <li>
                <a href="#">4</a>
            </li>
            <li>
                <a href="#">5</a>
            </li>
            <li>
                <a href="#">&raquo;</a>
            </li>
        </ul>
    </div>
  </div>
</template>
<style>
#schoolClass{
    text-align: left;
}
.class-Fliter td{
    transition: .3s ease-in-out;
    background: #76e4c8;
}
.class-Fliter td a{
    color: white;
}
.class-Fliter td:hover{
    background: #4bd6b3;
    transition: .3s ease-in-out;
}
.class-Fliter td:hover a{
    color: #fff;
}
</style>
<script>
    export default {
        data(){
            return {
                src:'static/img/office.png'
            }
        }
    }
</script>
