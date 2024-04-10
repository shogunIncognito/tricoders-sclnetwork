/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'

import PostsContainer from '@/components/posts/PostsContainer'
import useFetch from '@/hooks/useFetch'
import { useSession } from 'next-auth/react'

export default function MyPosts (): JSX.Element {
  // colocar id de la sesion
  const { data, status } = useSession()
  const { data: posts, error, loading } = useFetch('/api/users/661400be815be0aeffe6e60e/posts')

  console.log(data, status)

  if (error) return <p>Error: {error.message}</p>

  return (
    <>
      <h1 className='text-4xl font-bold opacity-75 text-center mt-12'>Tus publicaciones</h1>
      <PostsContainer posts={posts} loading={loading} />
    </>
  )
}
