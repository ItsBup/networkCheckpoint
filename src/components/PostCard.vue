<template>
  <section>
    <div>
      <h1>I hope this works</h1>
      <img :src="post.imgUrl" :alt="post.title" class="post-image">
    </div>
  </section>
  <!-- <section class="col-6">
      <div class="card">
          <img :src="post.imgUrl" :alt="post.title" class="post-image">
          <h2> {{ post.title }} </h2>
          <span> {{ post.body }} </span>
          <router-link :to="{ name: 'Profile', params: { profileId: blog.creatorId } }">
            <img :title="`Click to go to ${post.creator.name}'s Profile Page :D`" class="profile-pic" :src="post.creator.picture" :alt="post.creator.name">
          </router-link>
      </div>
  </section> -->
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
// .post-image {
//   height: 15vh;
//   width: 15vh;
//   object-fit: cover;
// }

// .profile-pic {
//   height: 8vh;
//   width: 8vh;
// }
</style>