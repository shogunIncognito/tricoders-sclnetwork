import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      username: string
      token: string
      image: string
      _id: string
      role: string
    }
  }
}

// username: existUser.username,
//             email: existUser.email,
//             image: existUser.image,
//             role: existUser.role,
//             _id: existUser._id
