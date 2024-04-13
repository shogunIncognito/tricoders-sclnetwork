/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'

import AddPost from '@/components/posts/AddPost'
import useFetch from '@/hooks/useFetch'
import { useFetchPostsResponse } from '../../types/types'
import PostsContainer from '@/components/posts/PostsContainer'
import UsersFollowing from '@/components/following/UsersFollowing'

export default function Posts (): JSX.Element {
  const { data: posts, error, loading, setValue }: useFetchPostsResponse = useFetch('api/posts')

  if (error) return <p>Error: {error.message}</p>

  return (
    <div className='flex relative overflow-hidden flex-1'>
      <AddPost setPost={setValue} />

      <PostsContainer posts={posts} loading={loading} setPost={setValue} />

      <UsersFollowing />
    </div>
  )
}
