<template>
  Profile sSTuff goes HERE
</template>

<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js'
import { profilesService } from '../services/ProfilesService.js';
import { useRoute } from 'vue-router';


export default {
  setup() {
    return {
      profile: computed(() => AppState.activeProfile),
    }
  },
}
</script>

<style scoped lang="scss"></style>