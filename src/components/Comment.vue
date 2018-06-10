<template>
    <div id="comment">
                <div class="comments">
    <comment-grid 
  baseURL=""
  apiKey=""
  nodeName="comment">
</comment-grid>
  </div>
    </div>
</template>
<script>
import Vue from 'Vue'
import CommentGrid from 'vue-comment-grid'

Vue.use(CommentGrid)
export default {
    name:'VueComment',
    components:{
        CommentGrid
    }
}
</script>

