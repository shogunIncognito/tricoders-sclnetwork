export interface SignUp {
  email: string
  password: string
  username: string
  confirmPassword: string
}

export interface User {
  _id: string
  email: string
  username: string
  image: string
  role: string
  id_post: string[]
  id_comment: string[]
}

export interface Post {
  _id: string
  content: string
  image: string
  likes: string[]
  id_user: User
  id_comment: string[]
}

export interface PostDTO {
  id_user: string
  content: string
  image: string
}

export interface useFetchResponse {
  data: any
  error: AxiosError | null
  loading: boolean
  setValue: (any) => void
}

export interface useFetchPostsResponse extends Omit<useFetchResponse, 'data'> {
  data: Post[] | null
}
