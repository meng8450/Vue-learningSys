<template>
<div id="Training">
    <!--轮播图-->
    <trainCarousel/>
    <!--实训栏目-->
    <div class="theProject" v-for="(item,index) in theme" :key="index">
        <img :src="item.image">
        <h2>{{item.name}}</h2>
        <h4>{{item.text}}</h4>
    </div>
</div>
</template>
<script>
import TrainCarousel from '@/components/TrainContent/TrainCarousel'
export default {
    name:'Training',
    components:{TrainCarousel},
    data(){
        return{
            theme:[
                {
                    image:/static/img/theme1.png,
                    name:"精准能力评估+针对性专项练习",
                    text:"要练就要练最有用的"
                },
                {
                    image:/static/img/theme1.png,
                    name:"互联网公司真题+模考+面经",
                    text:"公司考什么？怎么考？一刷便知！"
                },
                {
                    image:/static/img/theme1.png,
                    name:"精准能力评估+针对性专项练习",
                    text:"要练就要练最有用的"
                },
                {
                    image:/static/img/theme1.png,
                    name:"精准能力评估+针对性专项练习",
                    text:"要练就要练最有用的"
                },
            ]
        }
    }
}
</script>
<style scoped>

</style>


