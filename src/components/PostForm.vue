<template>
<!-- //TODO - make an actual form -->
<div class="component">
    <form @submit.prevent="handleSubmit()">
        <div class="mb-3 col-3">
            <label for="post-body">Body</label>
            <input type="text" minlength="3" maxlength="20" required name="post-body" id="post-body">
        </div>
        <div class="mb-3 col-3">
            <label for="post-imgUrl">imgUrl</label>
            <input type="url" required name="post-imgUrl" id="post-imgUrl">
        </div>
        <div class="mb-2 d-flex justify-content-end">
            <button class="btn" type="button" @click="resetForm">Cancel</button>
            <button class="btn btn-primary"><i class="mdi mdi-send"></i></button>
        </div>
    </form>
</div>
</template>
<!--  -->

<script>
import { postService } from '../services/PostService.js';
import { Post } from '../models/Post.js';
export default {
    props: { postProp: { type: Post } },
    setup(props) {
      //TODO const profileData = {}
    return {
          //TODO profileData,
        async createPost() {
            await postService.createPost()
            }
        }
    }
};
</script>


<style lang="scss" scoped>

</style>