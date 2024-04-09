/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'

import AddPost from '@/components/posts/AddPost'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import useFetch from '@/hooks/useFetch'
import { HeartIcon, MessageSquareIcon } from 'lucide-react'
import { useFetchPostsResponse } from '../../../types'
import Link from 'next/link'

export default function Posts (): JSX.Element {
  const { data: posts, error, loading, setValue }: useFetchPostsResponse = useFetch('posts')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className='flex flex-grow overflow-hidden'>

      <main className='overflow-auto gap-2 w-full flex-1 h-full flex flex-col items-center'>
        <AddPost setPost={setValue} />
        {posts?.map(post => (
          <div key={post._id} className='grid w-full max-w-full sm:max-w-[80%] md:max-w-[66%] lg:max-w-[40%] gap-4 p-4 place-content-center'>
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
                    className='aspect-video w-full overflow-hidden rounded-lg object-cover object-center'
                    height='250'
                    src={post.image}
                    width='500'
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
      </main>

      {/* lista de usuarios que se estan siguiendo */}
      <aside className='hidden lg:flex flex-col w-64 border-r border-gray-700 bg-gray-900/40'>
        <div className='flex items-center gap-4 px-6 py-2'>
          <span className='text-lg font-semibold text-gray-50'>Siguiendo</span>
        </div>
        <div className='flex-1 overflow-auto py-2'>
          <nav className='grid items-start px-4 text-sm font-medium'>
            <Link href='/'>
              <img
                alt='Profile image'
                className='rounded-full'
                height='40'
                src='https://randomuser.me/api/portraits'
              />
              <span>Username</span>
            </Link>
          </nav>
        </div>
      </aside>
    </div>
  )
}
