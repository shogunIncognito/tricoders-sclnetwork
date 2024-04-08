interface SignUp {
  email: string
  password: string
  username: string
  confirmPassword: string
}

interface User {
  email: string
  username: string
  image: string
  role: string
  id_post: string[]
  id_comment: string[]
}
