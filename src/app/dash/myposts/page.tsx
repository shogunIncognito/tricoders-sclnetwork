/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'

import PostsContainer from '@/components/posts/PostsContainer'
import useFetch from '@/hooks/useFetch'

export default function MyPosts (): JSX.Element {
  // colocar id de la sesion
  const { data: posts, error, loading } = useFetch('/api/users/661400be815be0aeffe6e60e/posts')

  if (error) return <p>Error: {error.message}</p>

  return (
    <PostsContainer posts={posts} loading={loading} />
  )
}
