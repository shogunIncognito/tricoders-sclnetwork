/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'

import PostsContainer from '@/components/posts/PostsContainer'
import { getUserPosts } from '@/services/api'
import { Post } from '@/types/types'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

export default function MyPosts (): JSX.Element {
  const { data, status } = useSession()
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    if (status === 'authenticated') {
      getUserPosts(data?.user?._id)
        .then(res => setPosts(res))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }
  }, [status])

  const setValue = (data: any): void => {
    setPosts(data)
  }

  return (
    <>
      <h1 className='text-4xl font-bold opacity-75 text-center mt-12'>Tus publicaciones</h1>
      <PostsContainer posts={posts} loading={loading} setPost={setValue} />
    </>
  )
}
