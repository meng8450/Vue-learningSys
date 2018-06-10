<template>
    <div id="comment">
                <div class="comments">
    <comment-grid 
  baseURL="comment-f5318.firebaseapp.com"
  apiKey="AIzaSyDZRsoU6e9eiCqEFtZng3lBlwjNIg3CNKE"
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

