<template>
      <div class="card m-3">
        <div class="card-body d-flex justify-content-start">
          <div class="rounded-circle">
            <router-link :to="{ name: 'Profile', params: { profileId: post.creatorId } }">
              <img :title="`Click to go to ${post.creator.name}'s Profile Page :D`" class="profile-pic" :src="post.creator.picture" :alt="post.creator.name">
            </router-link>
          </div>
          <div class="ms-3 mb-4">
            <h5 class="card-title">{{post.creator.name}}</h5>
            <p class="card-subtitle text-body-secondary">{{ formatDate(post.createdAt) }}</p>
            <h6 class="card-text p-3"> {{ post.body }} </h6>
          </div><div class="ms-auto mb-4">
            <!-- TODO if the user is logged in, show a button here that will allow them to like the post. Use a v-if // v-else -->
            <h3 class="card-text p-3">{{ post.likeIds.length }} <i class="mdi mdi-heart-outline"></i></h3>
          </div>
          <p v-if="post.creator.graduated" class="card-subtitle text-body-secondary"><i class="mdi mdi-account-school-outline"></i></p>
          <div>  
          </div>
        </div>
        <img v-if="post.imgUrl" :src="post.imgUrl" :alt="post.title" class="post-image card-img-top">
        <button @click="deletePost(post.id)" v-if="account.id == post.creatorId" class="btn btn-danger delete-button" title="delete post"><i class="mdi mdi-delete-forever"></i></button>
      </div>
</template>


<script>
import { RouterLink } from 'vue-router';
import { Post } from '../models/Post.js';
import { computed } from 'vue';
import { AppState } from '../AppState';
import Pop from '../utils/Pop';
import { postService } from '../services/PostService';
export default {
  props: {
    post: { type: Post, required: true }
  },
  setup() {
    return {
      account: computed(() => AppState.account),
      formatDate(rawDate) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(rawDate).toLocaleDateString(undefined, options);
        return formattedDate;
      },
      async deletePost(postId) {
        try {
          if (await Pop.confirm('WARNING!!! This will toss your post into the ABYSS')) {
            await postService.deletePost(postId)
            Pop.success('the void thanks you for your contribution')
          }
        } catch (error) {
          Pop.error(error)
        }
      },
      // TODO write a method that will allow the user to like a post, you will need a post ID to pass down to your service
    };
  },
  components: { RouterLink }
}

</script>


<style lang="scss" scoped>
.post-image {
  height: 50vh;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.rounded-circle {
  border-radius: 50%;
  overflow: hidden;
}

.profile-pic {
  height: 18vh;
  width: 18vh;

}
</style>