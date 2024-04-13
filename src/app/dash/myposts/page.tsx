/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'

import PostsContainer from '@/components/posts/PostsContainer'
import useFetch from '@/hooks/useFetch'
import { useSession } from 'next-auth/react'

export default function MyPosts (): JSX.Element {
  const { data } = useSession()
  const { data: posts, loading, setValue } = useFetch(`/api/users/${data!.user._id}/posts`)

  return (
    <>
      <h1 className='text-4xl font-bold opacity-75 text-center mt-12'>Tus publicaciones</h1>
      <PostsContainer posts={posts} loading={loading} setPost={setValue} />
    </>
  )
}
