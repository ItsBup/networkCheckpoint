<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 m-auto">
        <form @submit.prevent="updateAccount">
          <div class="mb-3">
            <label for="name">Name</label>
            <input v-model="editable.name" class="w-100" id="name" type="text" required>
          </div>
          <div class="mb-3">
            <label for="picture">Picture</label>
            <input v-model="editable.picture" class="w-100" id="picture" type="url" required>
          </div>
          <div class="mb-3">
            <label for="coverImg">Cover Image</label>
            <input v-model="editable.coverImg" class="w-100" id="coverImg" type="url" required>
          </div>
          <div class="mb-3">
            <label for="github">Github</label>
            <input v-model="editable.github" class="w-100" id="github" type="url">
          </div>
          <div class="mb-3">
            <label for="linkedin">LinkedIn</label>
            <input v-model="editable.linkedin" class="w-100" id="linkedin" type="url">
          </div>
          <div class="mb-3">
            <label for="resume">Resume</label>
            <input v-model="editable.resume" class="w-100" id="resume" type="url">
          </div>
          <div class="mb-3">
            <label for="graduated">Graduated?</label>
            <input v-model="editable.graduated" class="ms-2" id="graduated" type="checkbox">
          </div>
          <div class="mb-3">
            <label for="bio">Bio</label>
            <textarea v-model="editable.bio" name="bio" id="" class="w-100" rows="10"></textarea>
          </div>
          <div class="text-end mb-3">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  </div>

</template>

<script>
import { computed, popScopeId, ref, watch } from 'vue';
import { AppState } from '../AppState';
import { accountService } from '../services/AccountService';
import Pop from '../utils/Pop';
export default {
  setup() {
    const editable = ref({})
    const account = computed(()=>AppState.account)
    watch(
      account,
      ()=>{
        editable.value = { ...AppState.account }
      },
      { immediate:true }
    )
    return {
      account,
      editable,
      async updateAccount() {
        try {
          const accountData = editable.value
          await accountService.updateAccount(accountData)
          Pop.success('You\'re account has been updated!')
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
