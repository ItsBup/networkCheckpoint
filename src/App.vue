<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col-4 p-0">
        <Login />
        <!--TODO - remove Login from navbar and restyle to fix mock-->
      </div>
      <div class="col-8 p-0">
        <header>
          <Navbar />
        </header>
        <main class="container-fluid">
          <div class="row">
            <div class="col-8">
              <router-view />
            </div>
            <div class="col-4">
              <PosterCard />
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

export default {
  setup() {
    
    return {
      appState: computed(() => AppState)
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
