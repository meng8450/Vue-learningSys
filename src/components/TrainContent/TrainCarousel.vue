<template>
    <div class="trainCarousel" @mouseenter="enter" @mouseleave="leave">
        <transition-group tag="ul" name="imageCarousel">
            <li v-for="(image,index) in imgList" :key="index" v-show="index==mark">
                <a><img :src="image.src"></a>
            </li>
        </transition-group>
        <div class="trainBullet">
            <span v-for="(item,index) in imgList.length" :key="index" :class="{'red':index==mark}" @click="bulletChange(index)"></span>
        </div>
        <div class="switch">
            <span class="prev" @click="prev">&lt;</span>
            <span class="next" @click="next">&gt;</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'TrainCarousel',
    data(){
        return{
            mark:0,
            time:null,
            imgList:[
                {src: "http://dummyimage.com/1400x500/ffe599"},
                {src: "http://dummyimage.com/1400x500/dd7e6b"},
                {src: "http://dummyimage.com/1400x500/b6d7a8"}
            ]
        }
    },
    methods:{
        bulletChange(index){
            this.mark=index;
        },
        autoPlay(){
            this.mark++
            if(this.mark==3){
                this.mark=0
                return
            }
        },
        play(){
            this.time=setInterval(this.autoPlay,4000)
        },
        enter(){
            console.log('enter')
            clearInterval(this.time);
        },
        leave(){
            console.log('leave')
            this.play();
        },
        prev(){
            this.mark--;
            if(this.mark === -1){
                this.mark = 2;
                return
            }
        },
        next(){
            this.mark++;
            if(this.mark === 3){
                this.mark = 0;
                return
            }
        },
    },
    created(){
        this.play()
    }
}
</script>
<style>
.trainCarousel{
    height: 500px;
}
.trainCarousel ul li{
    display: inline-block;
    position: absolute;
}
.trainCarousel img{
    width: 1400px;
    height: 500px;
}
.trainBullet{
    position: absolute;
    font-size: 0;
    bottom: 100px;
    left: 50%;
    margin-left: -42px;
}
.trainBullet span{
    display: inline-block;
	width: 10px;
	height: 10px;
	background-color: #ffffff;
	margin-left: 15px;
    border-radius: 10px;
}
.trainBullet span:first-child{
    margin-left:0 ;
}
.red{
    background-color: red!important;
}
.switch span{
    position: absolute;
    width: 50px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	/* background-color: rgba(0,0,0,.1); */
	font-size: 50px;
	color: #ffffff;
	top: 50%;
	margin-top: -25px;
	cursor: pointer;
	font-family: "宋体";
}
.switch span:hover{
    /* background-color: rgba(0,0,0,.5); */
}
.prev{
    left: 20px;
}
.next{
    right: 20px;
}
.imageCarousel-enter-active{
    transform: translateX(0);
    transition: all 1s ease;
}
.imageCarousel-leave-active{
    transform: translateX(-100%);
    transition: all 1s ease;
}
.imageCarousel-enter{
    transform: translateX(100%);
}
.imageCarousel-leave{
    transform: translateX(0);
}
</style>

