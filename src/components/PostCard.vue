<template>
  <section class="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
      <div class="card align-items-center">
          <img :src="post.imgUrl" :alt="post.title" class="post-image card-img-top">
          <h4 class="bg-dark text-white p-3 rounded text-center"> {{ post.body }} </h4>
          <router-link :to="{ name: 'Profile', params: { profileId: post.creatorId } }">
            <img :title="`Click to go to ${post.creator.name}'s Profile Page :D`" class="profile-pic" :src="post.creator.picture" :alt="post.creator.name">
          </router-link>
      </div>
  </section>
</template>
<!-- //TODO - creator name createdAt creator pic, body, like count -->

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
  height: 50vh;
  width: 100vh;
  object-fit: cover;
  object-position: center;
}

.profile-pic {
  height: 8vh;
  width: 8vh;
}
</style>