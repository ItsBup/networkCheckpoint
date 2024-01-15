<template>
<div class="component">
    <form class="row" @submit.prevent="createPost()">
        <div class="mb-3 col-12">
            <label for="post-body">What's on your mind?</label>
            <textarea v-model="postData.body" rows="2" class="form-control" type="text" minlength="3" maxlength="200" required name="post-body" id="post-body"></textarea>
        </div>
        <div class="mb-3 col-6">
            <label for="post-imgUrl">Paste your imgUrl here!</label>
            <input v-model="postData.imgUrl" class="form-control" type="url" name="post-imgUrl" id="post-imgUrl">
        </div>
        <div class="col-6 p-3">
            <img v-if="postData.imgUrl" :src="postData.imgUrl" class="img-fluid" alt="preview of post image">
            <div v-else class="place-holder"> preview of post image will appear here</div>
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
    function resetForm(){
        postData.value = {}
    }
    return {
        postData,
        resetForm,
        async createPost() {
            try {
                logger.log('create Post', postData.value)
                await postService.createPost(postData.value)
                Pop.success('Your post is now live!!')
                resetForm()
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