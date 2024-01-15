<template>
  <!-- Profile sSTuff goes HERE -->
  <div class="container justify-content-center">
    <section v-if="profile" class="row">
      <div class="col-12">
        <div class="card m-2">
          <img class="card-img-top cover-img" :src="profile.coverImg" alt="its a cover image">
          <div class="card-body d-flex justify-content-between">
            <div class="rounded-circle overflow-hidden">
              <img class="profile-pic" :src="profile.picture" :alt="profile.name">
            </div>
            <div class="">
              <a v-if="profile.github" :href="profile.github" class="btn btn-primary ms-1" :title="`Click here to go ${profile.name}'s github!`" target="_blank"><i class="mdi mdi-github"></i></a>
              <a v-if="profile.linkedin" :href="profile.linkedin" class="btn btn-primary ms-1" :title="`Click here to go ${profile.name}'s linkedin!`" target="_blank"><i class="mdi mdi-linkedin"></i></a>
              <a v-if="profile.resume" :href="profile.resume" class="btn btn-primary ms-1" :title="`Click here to go ${profile.name}'s resume!`" target="_blank"><i class="mdi mdi-account-file-text"></i></a>
            </div>
          </div>
          <div class="ms-5 mb-4">
            <h6 v-if="profile.graduated" class="card-subtitle mb-2 text-body-secondary">Graduated {{ profile.class }} </h6>
            <h2 class="card-title">{{profile.name}}</h2>
            <p class="card-text">{{ profile.bio ? profile.bio : 'This profile doesn\'t have a bio.☹️' }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="row">
      <div v-for="post in posts" :key="post.id" class="col-12 mb-3">
        <PostCard :post="post" />
      </div>
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
      postService.clearAppState()
      getProfileId();
      getPostId();

    })
    return {
      profile: computed(() => AppState.activeProfile),
      posts: computed(() => AppState.profilePosts)
    }
  },
  components:{PostCard}
}
</script>

<style scoped lang="scss">
.profile-pic {
  height: 20vh;
  width: 20vh;
  object-fit: cover;
}

.rounded-circle {
  border-radius: 50%;
  overflow: hidden;
}
.cover-img {
  height: 30vh;
  width: 100%;
  object-fit: cover;
}
</style>