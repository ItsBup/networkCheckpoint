<template>
<div class="component">
    <form class="row" @submit.prevent="createPost()">
        <div class="mb-3 col-12">
            <label for="post-body">What's on your mind?</label>
            <input v-model="postData.body" class="form-control" type="text" minlength="3" maxlength="200" required name="post-body" id="post-body">
        </div>
        <div class="mb-3 col-3">
            <label for="post-imgUrl">Paste your imgUrl here!</label>
            <input v-model="postData.imgUrl" class="form-control" type="url" required name="post-imgUrl" id="post-imgUrl">
        </div>
        <div class="mb-2 d-flex justify-content-end">
            <button class="btn" type="button" @click="resetForm">Cancel</button>
            <button class="btn btn-primary"><i class="mdi mdi-send"></i></button>
        </div>
    </form>
</div>
</template>

<script>
import { postService } from '../services/PostService.js';
import { Post } from '../models/Post.js';
import Pop from '../utils/Pop';
import { logger } from '../utils/Logger';
import { ref } from 'vue';
export default {
    setup() {
        const postData = ref({})
    return {
        postData,
        async createPost() {
            try {
                logger.log('create Post', postData.value)
                // await postService.createPost()
            } catch (error) {
                Pop.error(error)
            }
            }
        }
    }
};
</script>


<style lang="scss" scoped>

</style>