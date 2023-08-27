import instance from '@/api/instance'

const modelUrl = `users`
export default {
  get(query = '') {
    return instance.get(`${modelUrl}/${query}`)
  }
}
