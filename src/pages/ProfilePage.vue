<template>
  <!-- Profile sSTuff goes HERE -->
  <div class="container-fluid">
    <section v-if="profile" class="row">
      <div class="col-12 text-center my-3">
        <img :src="profile.picture" :alt="profile.name">
        <div>
          <img :src="profile.coverImg" alt="its a cover image">
        </div>
      </div>
      <!-- <div class="col-8 ps-5">
        <h1>
          <a href="profile.github"></a>

        </h1>
        <p>{{ profile.bio }}</p>
      </div> -->

    </section>

  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js'
import { profileService } from '../services/ProfileService.js';
import { useRoute } from 'vue-router';
import PostCard from '../components/PostCard.vue';
import { postService } from '../services/PostService';


export default {
  setup() {
    const route = useRoute();
    // const watchableProfileId = computed(() => route.params.profileId)

    async function getProfileId() {
      try {
        const profileId = route.params.profileId
        await profileService.getProfileId(profileId)
      }
      catch (error) {
        Pop.error(error);
      }
    }
    async function getPostId() {
      try {
        const profileId = route.params.profileId
        await postService.getPostId(profileId)
      } catch (error) {
        Pop.error(error);
      }
    }
    onMounted(() => {

      getProfileId();

    })
    return {
      profile: computed(() => AppState.activeProfile),
      posts: computed(() => AppState.profilePosts)
    }
  },
  components:{PostCard}
}
</script>

<style scoped lang="scss"></style>