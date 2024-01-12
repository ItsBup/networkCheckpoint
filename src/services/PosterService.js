import { AppState } from '../AppState'
import { Post } from '../models/Post'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PosterService {
  async getPosters() {
    try {
      const res = await api.get('api/ad')
      logger.log('whats the issue?', res.data)
      // const newPoster = res.data.posts.map(poster => new Poster(poster))
      // AppState.posters = newPoster
      // logger.log('new post in AppState', AppState.posters)
    } catch (err) {
      logger.error('AHHHHHHHHHHH', err)
    }
  }
  async createService(postData) {
    const res = await api.post('api/posts', postData)
    AppState.posts.push(new Post(res.data))
}
}

export const posterService = new PosterService()
