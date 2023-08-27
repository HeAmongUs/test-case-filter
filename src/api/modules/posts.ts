import instance from '@/api/instance'

const modelUrl = `posts`
export default {
  get(query = '') {
    return instance.get(`${modelUrl}/${query}`)
  }
}
