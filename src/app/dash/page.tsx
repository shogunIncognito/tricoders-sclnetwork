/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'

import AddPost from '@/components/posts/AddPost'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import useFetch from '@/hooks/useFetch'
import { HeartIcon, MessageSquareIcon } from 'lucide-react'
import { useFetchPostsResponse } from '../../../types'
import Masonry from 'react-masonry-css'
import Link from 'next/link'

const breakpointColumnsObj = {
  default: 3,
  1240: 2,
  700: 2,
  500: 1
}

export default function Posts (): JSX.Element {
  const { data: posts, error, loading, setValue }: useFetchPostsResponse = useFetch('posts')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className='flex relative overflow-hidden flex-1'>
      <AddPost setPost={setValue} />

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid px-4 overflow-auto mt-14'
        columnClassName='my-masonry-grid_column'
      >
        {posts?.map(post => (
          <div key={post._id} className='grid gap-4 p-1.5 place-content-center'>
            <Card className='p-4 space-y-4 w-full'>
              <div className='space-y-2'>
                <div className='flex items-center space-x-2'>
                  <img
                    alt={post.id_user.username}
                    className='rounded-full'
                    height='40'
                    src={post.id_user.image}
                    style={{
                      aspectRatio: '40/40',
                      objectFit: 'cover'
                    }}
                    width='40'
                  />
                  <div>
                    <h3 className='text-base font-semibold'>{post.id_user.username}</h3>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>{post.id_user.email}</p>
                  </div>
                </div>
                <div className='space-y-2'>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    {post.content}
                  </p>
                  <img
                    alt='Cover image'
                    className='w-full overflow-hidden rounded-lg object-cover object-center'
                    src={post.image}
                  />
                </div>
              </div>
              <div className='space-y-2 border-t border-gray-600 pt-4 w-full'>
                <div className='flex items-center gap-3'>
                  <div className='flex items-center gap-1'>
                    <Button className='rounded-full p-2' size='icon' variant='ghost'>
                      <HeartIcon className='w-4 h-4' />
                    </Button>
                    <span className='opacity-80 ml-0'>{post.likes.length}</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Button className='rounded-full p-2' size='icon' variant='ghost'>
                      <MessageSquareIcon className='w-4 h-4' />
                    </Button>
                    <span className='opacity-80 ml-0'>{post.id_comment.length}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </Masonry>

      {/* lista de usuarios que se estan siguiendo */}
      <aside className='hidden w-44 lg:w-60 lg:flex flex-col border-r border-gray-700 bg-gray-900/40'>
        <div className='flex items-center gap-4 px-6 py-2'>
          <span className='text-lg font-semibold text-gray-50'>Siguiendo</span>
        </div>
        <div className='flex-1 overflow-y-auto w-3/4 ml-5 overflow-x-hidden flex flex-col gap-3 py-2'>
          {Array.from({ length: 5 }).map((_, i) => (
            <Link key={i} href='/profile/bacallo' className='flex items-center gap-3'>
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
