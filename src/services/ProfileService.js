import { AppState } from '../AppState'
import { Profile } from '../models/Profile'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProfileService {
  async getProfileId(profileId) {
    try {
      const res = await api.get(`api/profiles/${profileId}`)
      logger.log('profile res data', res.data)
      const newProfile = new Profile(res.data)
      AppState.activeProfile = newProfile
      logger.log('new active Profile', AppState.activeProfile)
    } catch (err) {
      logger.error('AHHHHHHHHHHH', err)
    }
  }
}

export const profileService = new ProfileService()

