import Masonry from 'react-masonry-css'
import { HeartIcon, MessageSquareIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Post } from '../../types/types'
import { Skeleton } from '@/components/ui/skeleton'
import { useState } from 'react'

const breakpointColumnsObj = {
  default: 3,
  1340: 2,
  700: 2,
  600: 1
}

const skeletonBreakpointColumnsObj = {
  default: 3,
  1340: 2,
  750: 1
}

export default function PostsContainer ({ posts, loading }: { posts: Post[] | null, loading: boolean }): JSX.Element {
  const [imagesLoaded, setImagesLoaded] = useState<string[]>([])

  const handleImageLoad = (img: string): void => {
    setImagesLoaded((prev: string[]) => [...prev, img])
  }

  if (loading) {
    return (
      <Masonry
        breakpointCols={skeletonBreakpointColumnsObj}
        className='my-masonry-grid px-8 overflow-auto gap-5 mt-14'
        columnClassName='my-masonry-grid_column'
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className='flex border-gray-500/30 pb-4 flex-col space-y-3 mt-6'>
            <div className='flex items-center gap-2'>
              <Skeleton className='h-12 w-12 rounded-full' />
              <div>
                <Skeleton className='h-4 w-[160px]' />
                <Skeleton className='h-4 w-[100px] mt-2' />
              </div>
              {i % 2 === 0}
            </div>
            <div className='space-y-2'>
              <Skeleton className='h-4 w-[320px]' />
              <Skeleton className='h-4 w-[300px]' />
            </div>
            <Skeleton className='w-full h-[150px] rounded-xl' style={{ height: i % 2 === 0 ? '260px' : '180px' }} />
          </div>
        ))}
      </Masonry>
    )
  }

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className='my-masonry-grid px-4 overflow-auto mt-14'
      columnClassName='my-masonry-grid_column'
    >
      {posts?.map((post, i) => (
        <div key={post._id} className='gap-4 p-1.5'>
          <Card className='p-4 space-y-4 w-full'>
            <div className='space-y-2 w-full'>
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
                  onLoad={() => handleImageLoad(post.image)}
                  style={{ display: imagesLoaded.includes(post.image) ? 'block' : 'none' }}
                />
                {!imagesLoaded.includes(post.image) &&
                  <Skeleton className='h-[250px] w-auto overflow-hidden rounded-lg object-cover object-center' style={{ height: i % 2 === 0 ? '350px' : '240px' }} />}
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
  )
}
