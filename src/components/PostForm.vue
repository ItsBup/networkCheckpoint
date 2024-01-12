<template>
  <!-- //TODO - make an actual form -->
  <!-- <div class="component">
      <form @submit.prevent="handleSubmit()">
          <div class="mb-3 col-3">
              <label for="post-body">Body</label>
              <input required name="post-body" id="post-body">
          </div>
          <div class="mb-3 col-3">
              <label for="post-imgUrl">imgUrl</label>
              <input required name="post-imgUrl" id="post-imgUrl">
          </div>
      </form>
  </div> -->
</template>


<script>
import { postService } from '../services/PostService.js';
import { Post } from '../models/Post.js';
export default {
  props: { postProp: { type: Post } },
  setup(props) {
      //TODO const profileData = {}
      return {
          //TODO profileData,
          async createPost() {
              await postService.createPost()
          }
      }
  }
};
</script>


<style lang="scss" scoped>

</style>