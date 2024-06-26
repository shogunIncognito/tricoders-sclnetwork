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

export const deletePost = async (postId: string): Promise<void> => {
  const response = await axios.delete(`/api/posts/${postId}`)
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

export const createComment = async (comment: string, userId: string, postId: string): Promise<Post> => {
  const response = await axios.post(`/api/posts/${postId}/comments`, { comment, userId })
  return response.data
}

// profile

export const followUser = async (userToFollow: string, userId: string): Promise<void> => {
  const response = await axios.post(`/api/users/${userToFollow}/following`, { userId })
  return response.data
}

export const deleteFollow = async (userToUnfollow: string, userId: string): Promise<void> => {
  const response = await axios.post(`/api/users/${userToUnfollow}/unfollow`, { userId })
  return response.data
}
