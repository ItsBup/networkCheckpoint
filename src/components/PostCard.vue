<template>
  <section class="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
      <div class="card align-items-center" style="width: clamp(500px, 50vw, 100%);">
          <img :src="post.imgUrl" :alt="post.title" class="post-image">
          <h4 class="bg-dark text-white p-3 rounded text-center"> {{ post.body }} </h4>
          <router-link :to="{ name: 'Profile', params: { profileId: post.creatorId } }">
            <img :title="`Click to go to ${post.creator.name}'s Profile Page :D`" class="profile-pic" :src="post.creator.picture" :alt="post.creator.name">
          </router-link>
      </div>
  </section>
</template>


<script>
import { RouterLink } from 'vue-router';
import { Post } from '../models/Post.js';
export default{
  props: {
    post: { type: Post, required: true }
  },
  setup() {
    return {};
  },
  components: { RouterLink }
}

</script>


<style lang="scss" scoped>
.post-image {
  height: 69vh;
  width: 69vh;
  max-width: 100%;
  object-fit: contain;
  object-position: center;
}

.profile-pic {
  height: 8vh;
  width: 8vh;
}
</style>