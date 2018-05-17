<template>
    <div id="grade">
        <div class="grade">
        <div class="right-grade">
            <h2>我的成绩</h2>
        </div>
        <div class="btn-group">
            <button type="button" class="btn btn-default dropdown-toggle" 
                    data-toggle="dropdown">
                请选择课程 <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" role="menu">
                <li><a href="#">java</a></li>
                <li><a href="#">c</a></li>
                <li><a href="#">c++</a></li>
                <!-- <li class="divider"></li>
                <li><a href="#">分离的链接</a></li> -->
            </ul>
            <div class="all">
            <button type="button" class="btn btn-default">查看全部课程成绩</button>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
    require('../../assets/css/student-grade.css')
</script>
<style>
#grade{
    text-align: left;
}
</style>

