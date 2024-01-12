<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="home-card p-5 card align-items-center shadow rounded elevation-3">
      <img src="https://ih1.redbubble.net/image.4745202198.4492/raf,750x1000,075,t,101010:01c5ca27c6.jpg" alt="We Love Casting Spells ~ designed and sold by 
Srollins001"
        class="rounded-circle">
        <div v-for="post in posts" class="row">
          <PostCard :post="post" />
        </div>
      <!-- <h1 class="my-5 bg-dark text-white p-3 rounded text-center">
        Posts Go Here
      </h1> -->
    </div>
  </div>
</template>

<script>
import Pop from '../utils/Pop';
import { AppState } from '../AppState';
import {postService} from '../services/PostService.js';
import { computed, onMounted } from 'vue';
import PostCard from '../components/PostCard.vue';

export default {
  setup() {
    async function getPosts(){
      try {
        await postService.getPosts();
      } catch (error) {
        Pop.error(error)
      }
    }
    onMounted(()=>{getPosts();})
    return {
      posts: computed(()=>AppState.posts)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 300px;
      max-width: 300px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
