import { AppState } from '../AppState'
import { Poster } from '../models/Poster'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PosterService {
  async getPosters() {
    try {
      const res = await api.get('api/ads')
      logger.log('poster res data', res.data)
      const newPoster = res.data.map(poster => new Poster(poster))
      AppState.posters = newPoster
      logger.log('new poster in AppState', AppState.posters)
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
