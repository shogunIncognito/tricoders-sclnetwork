import axios from 'axios'
import { Post, PostDTO, SignUp } from '../types/types'

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
export const getUserPosts = async (userId: string): Promise<Post[]> => {
  const response = await axios.get(`/api/users/${userId}/posts`)
  return response.data
}

export const createPost = async (post: PostDTO): Promise<Post> => {
  const response = await axios.post('/api/posts', post)
  return response.data
}

export const likeToPost = async (postId: string, userId: string | undefined): Promise<void> => {
  try {
    const response = await axios.post(`/api/posts/${postId}`, { userId })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const createComment = async (comment: string, userId: string, postId: string): Promise<void> => {
  const response = await axios.post(`/api/posts/${postId}/comments`, { comment, userId })
  return response.data
}

export const followUser = async (userId: string, followerId: string): Promise<void> => {
  const response = await axios.post(`/api/users/${userId}/followers`, { followerId })
  return response.data
}
