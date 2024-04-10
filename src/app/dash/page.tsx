/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'

import AddPost from '@/components/posts/AddPost'
import useFetch from '@/hooks/useFetch'
import { useFetchPostsResponse } from '../../types/types'
import Link from 'next/link'
import PostsContainer from '@/components/posts/PostsContainer'

export default function Posts (): JSX.Element {
  const { data: posts, error, loading, setValue }: useFetchPostsResponse = useFetch('api/posts')

  if (error) return <p>Error: {error.message}</p>

  return (
    <div className='flex relative overflow-hidden flex-1'>
      <AddPost setPost={setValue} />

      <PostsContainer posts={posts} loading={loading} />

      {/* lista de usuarios que se estan siguiendo */}
      <aside className='hidden w-44 lg:w-60 lg:flex flex-col border-r border-gray-700 bg-gray-900/40'>
        <div className='flex items-center gap-4 px-6 py-2'>
          <span className='text-lg font-semibold text-gray-50'>Siguiendo</span>
        </div>
        <div className='flex-1 overflow-y-auto w-3/4 ml-5 overflow-x-hidden flex flex-col gap-3 py-2'>
          {Array.from({ length: 5 }).map((_, i) => (
            <Link key={i} href='dash/profile/23' className='flex items-center gap-3'>
              <img
                alt='user_name'
                className='rounded-full'
                height='40'
                src='https://i.pravatar.cc/300'
                style={{
                  aspectRatio: '40/40',
                  objectFit: 'cover'
                }}
                width='40'
              />
              <span className='text-ellipsis overflow-hidden whitespace-nowrap'>Bacallo BacalloBacalloBacalloBacalloBacallo BacalloBacalloBacalloBacalloBacallo</span>
            </Link>
          ))}
        </div>
      </aside>
    </div>
  )
}
