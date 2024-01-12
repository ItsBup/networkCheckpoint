<template>
  <section>
    <div>
      <img :src="poster.tall" :alt="poster.title" class="poster-image p-2">
    </div>
  </section>
  <!-- <section class="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
      <div class="card align-items-center" style="width: clamp(500px, 50vw, 100%);">
          <img :src="poster.linkUrl" :alt="poster.title" class="poster-image">
      </div>
  </section> -->
</template>
<!-- //NOTE - Below is from Poster Model
  export class Poster {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.linkURL = data.linkURL
    this.tall = data.tall
    this.square = data.square
    this.banner = data.banner
  }
} -->


<script>
import { onMounted } from 'vue';
import { Poster } from '../models/Poster.js';

import Pop from '../utils/Pop';

export default{
  props: {
    poster: { type: Poster, required: true }
  },
  setup() {
    return {};
  },
}

</script>


<style lang="scss" scoped>
.poster-image {
  height: 69vh;
  width: 69vh;
  max-width: 100%;
  object-fit: contain;
  object-position: center;
}

</style>