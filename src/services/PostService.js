import { AppState } from '../AppState'
import { Post } from '../models/Post'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PostService {
  async getPosts() {
    try {
      const res = await api.get('api/posts')
      logger.log('whats the issue?', res.data)
      const newPost = res.data.posts.map(post => new Post(post))
      AppState.posts = newPost
      logger.log('new post in AppState', AppState.posts)
    } catch (err) {
      logger.error('AHHHHHHHHHHH', err)
    }
  }
}

export const postService = new PostService()
