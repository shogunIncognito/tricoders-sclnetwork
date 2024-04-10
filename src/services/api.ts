import axios from 'axios'
import { Post, PostDTO, SignUp } from '../../types'

// auth
export const getLoginImage = async (): Promise<any> => {
  const response = await axios.get('https://source.unsplash.com/1920x1080/?software')
  return { url: response?.request.responseURL, status: true }
}

export const signUp = async (data: SignUp): Promise<void> => {
  const response = await axios.post('/api/auth/signup', data)
  return response.data
}

// posts
export const createPost = async (post: PostDTO): Promise<Post> => {
  const response = await axios.post('/api/posts', post)
  return response.data
}
