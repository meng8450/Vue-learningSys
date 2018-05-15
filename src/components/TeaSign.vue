<template>
<div id="teaSign">
    <div id="sign" class="sign mc">
        <a href="#/stusignup">
            <span class="sign-item bgcG">
                <h4>学生注册</h4>
            </span>
        </a>
        <a>
            <span class="sign-item bgcY">
                <h4>教师注册</h4>
            </span>
        </a>
        <form>
            <table class="mc signBox">
                <tr>
                    <td>
                        <p>用户名</p>
                    </td>
                    <td>
                        <input type="text" class="form-control" placeholder="请输入用户名">
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>邮箱</p>
                    </td>
                    <td>
                        <input type="text" class="form-control" placeholder="请输入邮箱">
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>密码</p>
                    </td>
                    <td>
                        <input type="text" class="form-control" placeholder="6-12位密码，不可用空格，区分大小写">
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>确认密码</p>
                    </td>
                    <td>
                        <input type="text" class="form-control" placeholder="再次输入密码">
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>确认密码</p>
                    </td>
                    <td>
                        <input type="text" class="form-control" placeholder="再次输入密码">
                    </td>
                </tr>
            </table>
        </form>
        <div class="modal-footer">
            <button type="button" class="btn btn-default ">提交</button>
        </div>
    </div>
</div>
</template>
<style>
#teaSign{
    min-height: 450px;
}
</style>
