<template>
  <!-- <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="home-card p-5 card align-items-center shadow rounded elevation-3">
      <img src="https://ih1.redbubble.net/image.4745202198.4492/raf,750x1000,075,t,101010:01c5ca27c6.jpg" alt="We Love Casting Spells ~ designed and sold by 
Srollins001"
        class="rounded-circle">
      <h1 class="my-2 bg-dark text-white p-3 rounded text-center">
        CREATE YOUR OWN POST
      </h1>
    </div>
  </div> -->
  <section>
    <PostForm />
  </section>
  <section>
    <div v-for="post in posts">
      <PostCard :post="post" />
    </div>
  </section>
</template>

<script>
import Pop from '../utils/Pop';
import { AppState } from '../AppState';
import {postService} from '../services/PostService.js';
import { computed, onMounted } from 'vue';
import PostCard from '../components/PostCard.vue';
import PostForm from '../components/PostForm.vue';

export default {
  setup() {
    async function getPosts(){
      try {
        await postService.getPosts();
      } catch (error) {
        Pop.error(error)
      }
    }
    onMounted(()=>{
      getPosts();
    })
    return {
      posts: computed(()=>AppState.posts),
    }
  },
  components:{ PostCard, PostForm }
  //TODO - gonna need to add a PostForm l8r
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 69vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
