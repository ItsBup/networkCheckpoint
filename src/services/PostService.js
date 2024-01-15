import { applyStyles } from '@popperjs/core'
import { AppState } from '../AppState'
import { Post } from '../models/Post'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PostService {
  async getPosts() {
    try {
      const res = await api.get('api/posts')
      logger.log('post res data', res.data)
      const newPost = res.data.posts.map(post => new Post(post))
      AppState.posts = newPost
      logger.log('new post in AppState', AppState.posts)
      // TODO save page information from your res.data here
      // NOTE save pagination for last
    } catch (err) {
      logger.error('AHHHHHHHHHHH', err)
    }
  }
  async createPost(postData) {
    const res = await api.post('api/posts', postData)
    logger.log('new post success', res.data)
    AppState.posts.push(new Post(res.data))
  }
  async deletePost(postId) {
    const res = await api.delete(`api/posts/${postId}`)
    logger.log('GOTCHA!!! PREPARING TO DELETE', res.data);
    const indexToRemove = AppState.posts.findIndex(post => post.id == postId)
    AppState.posts.splice(indexToRemove, 1)
  }
  async getPostId(profileId) {
    const res = await api.get(`api/posts?creatorId=${profileId}`)
    logger.log('post by creator Id for Profile', res.data)
    const newPosts = res.data.posts.map(post => new Post(post))
    AppState.profilePosts = newPosts
  }
  clearAppState() {
    AppState.activeProfile = null
    AppState.profilePosts = []
  }

  // TODO write a like post method here that will reach out to the api to like a post. You will need the post ID for this POST request, and it should be formatted to look like this: 'api/posts/:postId/like'
  // TODO if you want this to be reactive, splice out the old post from the appstate and replace it with res.data coming from the api


  // TODO write changePage method
  // TODO write changePageWithProfileId method
}

export const postService = new PostService()
