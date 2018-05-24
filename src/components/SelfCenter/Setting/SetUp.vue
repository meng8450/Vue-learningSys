<template>
    <div id="setUp">
        <div class="setting-right">
                    <div class="toptitle l">
                        个人信息
                    </div>
                    <div class="right-write r">
                        <img src="\static\img\write.png">
                        <a href="#">编辑</a>
                    </div>
                    <div class="mybody">
                        <div class="info-box">
                            <label class="l">昵称</label>
                            <div class="l">{{nickname}}</div>
                        </div>
                        <div class="info-box">
                            <label class="l">职位</label>
                            <div class="l">{{identity}}</div>
                        </div>
                        <div class="info-box">
                            <label class="l">城市</label>
                            <div class="l">未设置</div>
                        </div>
                        <div class="info-box">
                            <label class="l">性别</label>
                            <div class="l">保密</div>
                        </div>
                        <div class="info-box">
                            <label class="l">个性签名</label>
                            <div class="l">未设置</div>
                        </div>
                    </div>
            </div>
    </div>
</template>
<style scoped>
</style>
<script>
    export default {
        data(){
            return {
                nickname:JSON.parse(sessionStorage.getItem('yzInfo')).nickname,
                identity:JSON.parse(sessionStorage.getItem('yzInfo')).identity,
            }
        }
    }
</script>
