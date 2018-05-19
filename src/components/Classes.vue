<template>
  <div id="classes">
          <div class="menu mc">
        <div class="menuItem">
            <a href="#/schoolclass" target="_blank">
                <span class="btn-danger">校内课堂</span>
            </a>
            <a href="#" target="_blank">
                <span class="btn-danger">编程开发</span>
            </a>
            <a href="#" target="_blank">
                <span class="btn-danger">办公效率</span>
            </a>
        </div>

        <div id="owl-demo" class="owl-carousel">
            <a class="itemPhoto" v-for="(item,index) in lunboSrc" :key="index">
                <img v-lazy="item" alt="">
            </a>
        </div>
    </div>

    <div class="classTitle mc">
        <h3 class="text-left">编程开发</h3>
        <a href="#">查看全部</a>
    </div>
    <div class="classes mc">
        <a href="#" target="_blank">
            <span class="classLef">
                <img v-lazy="picUrl.xb">
            </span>
        </a>
        <div class="classRig">
            <div v-for="(item,index) in [1,2]" :key="index">
                <a href="#" target="_blank" v-for="(item,index) in [1,2,3]" :key="index">
                    <span class="classBox">
                        <img v-lazy="picUrl.class">
                        <span class="className">课程名</span>
                        <span class="classTea">授课教师</span>
                        <span class="classPri">￥
                            <p>课程价格</p>
                        </span>

                    </span>
                </a>
            </div>
        </div>

    </div>
    <div class="classes mc">
        <a href="#" target="_blank">
            <span class="classLef">
                <img v-lazy="picUrl.xb">
            </span>
        </a>
        <div class="classRig">
            <div class="classRigchild">
                <a href="#" target="_blank" v-for="(item,index) in [1,2,3]" :key="index">
                    <span class="classBox">
                        <img v-lazy="picUrl.class">
                        <span class="className">课程名</span>
                        <span class="classTea">授课教师</span>
                        <span class="classPri">￥
                            <p>课程价格</p>
                        </span>

                    </span>
                </a>
            </div>

            <div>
                <a href="#" target="_blank" v-for="(item,index) in [1,2,3]" :key="index">
                    <span class="classBox">
                        <img v-lazy="picUrl.class">
                        <span class="className">课程名</span>
                        <span class="classTea">授课教师</span>
                        <span class="classPri">￥
                            <p>课程价格</p>
                        </span>

                    </span>
                </a>
            </div>
        </div>

    </div>

    <div class="classTitle mc">
        <h3 class="text-left">校内课堂</h3>
        <a href="#">查看全部</a>
    </div>
    <div class="classes mc" v-for="(item,index) in classInfos" :key="index">
        <div class="text-center">
        <a href="#" target="_blank" v-for="(classInfo,index) in item" :key="index">
            <span class="classBox">
                <img v-lazy="classInfo.src">
                <span class="className">{{classInfo.className}}</span>
                <span class="classTea">{{classInfo.teacherName}}</span>
            </span>
        </a>
        </div>
    </div>
  </div>
</template>
<script>

export default {
    data(){
        return {
            classInfos:[[{
                src:"/static/img/class.JPG",
                className:"课程名",
                teacherName:"授课老师"
            },{
                src:"/static/img/class.JPG",
                className:"课程名",
                teacherName:"授课老师"
            },{
                src:"/static/img/class.JPG",
                className:"课程名",
                teacherName:"授课老师"
            },{
                src:"/static/img/class.JPG",
                className:"课程名",
                teacherName:"授课老师"
            }],[{
                src:"/static/img/class.JPG",
                className:"课程名",
                teacherName:"授课老师"
            },{
                src:"/static/img/class.JPG",
                className:"课程名",
                teacherName:"授课老师"
            },{
                src:"/static/img/class.JPG",
                className:"课程名",
                teacherName:"授课老师"
            },{
                src:"/static/img/class.JPG",
                className:"课程名",
                teacherName:"授课老师"
            }]],
            lunboSrc:["/static/img/lunbo1.jpg","/static/img/lunbo2.jpg","/static/img/lunbo3.jpg","/static/img/fullimage1.jpg","/static/img/fullimage2.jpg","/static/img/fullimage3.jpg"],
            picUrl:{
                class:'/static/img/class.JPG',
                xb:'/static/img/xb.JPG'
            }
        }
    },    
    mounted: function () {
    $('#owl-demo').owlCarousel({
                    items: 1,
                    autoPlay: true
                });                
  }
}

  //widget

              
    
</script>
<style scoped>
.classBox{
    width: 250px!important;
    height: 200px!important;
    background: #fffff1!important;
    display: inline-block!important;
    margin: 0 6px!important;
    margin-bottom: 10px!important;
    border-radius: 10px!important;
    transition: .3s ease-in-out;
    box-shadow: 0 6px 10px 0 rgba(72, 207, 173, 0.1), 0 2px 2px 0 rgba(72, 207, 173, 0.2);
}
.classBox:hover{
    box-shadow: 0 7px 10px 0 rgba(72, 207, 173, 0.3), 0 2px 2px 0 rgba(72, 207, 173, 0.23);
    transition: .3s ease-in-out;
}
.classBox img{
    border-radius: 10px 10px 0 0;
    transition: .3s ease-in-out;
}
.btn-danger {
    color: #fff;
    background-color: #48cfad;
    border-color: #48cfad;
}
.btn-danger:hover {
    color: #fff;
    background-color: #48cfad9e;
    border-color: #48cfad;
}
</style>
