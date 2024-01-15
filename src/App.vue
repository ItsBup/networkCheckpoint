<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col-3 p-0">
        <Login />
        <!--TODO - remove Login from navbar and restyle to fix mock-->
      </div>
      <div class="col-9 p-0">
        <header>
          <Navbar />
        </header>
        <main class="container-fluid">
          <div class="row">
            <div class="col-8">
              <router-view />
            </div>
            <div class="col-4">
              <div v-for="poster in posters">
                <PosterCard :poster="poster"/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import Login from './components/Login.vue'
import PosterCard from './components/PosterCard.vue'
import { posterService } from './services/PosterService';
import { onMounted } from 'vue'

export default {
  setup() {
    async function getPosters(){
      try {
        await posterService.getPosters();
      } catch (error) {
        Pop.error(error)
      }
    }
    onMounted(()=>{
      getPosters();
    })
    return {
      appState: computed(() => AppState),
      posters: computed(()=>AppState.posters)
    }
  },
  components: { Navbar, Login, PosterCard }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
