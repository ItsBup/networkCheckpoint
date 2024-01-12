import { AppState } from '../AppState'
import { Post } from '../models/Post'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PostService {
  async getPosts() {
    try {
      const res = await api.get('/post')
      AppState.post = new Post(res.data)
    } catch (err) {
      logger.error('AHHHHHHHHHHH', err)
    }
  }
}

export const postService = new PostService()
