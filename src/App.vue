<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col-4 p-0">
        <Login />
      </div>
      <div class="col-8 p-0">
        <header>
          <Navbar />
        </header>
        <main>
          <router-view />
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

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, Login }
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
