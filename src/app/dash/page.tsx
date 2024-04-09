import { Button } from '@/components/ui/button'
import { HeartIcon, MessageSquareIcon, RepeatIcon } from 'lucide-react'

export default function Posts (): JSX.Element {
  return (
    <main className='overflow-auto py-2'>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className='grid gap-4 p-4'>
          <div className='space-y-2'>
            <div className='flex items-center space-x-2'>
              <img
                alt='Avatar'
                className='rounded-full'
                height='40'
                src='https://i.pravatar.cc/300'
                style={{
                  aspectRatio: '40/40',
                  objectFit: 'cover'
                }}
                width='40'
              />
              <div className='space-y-1'>
                <h3 className='text-base font-semibold'>Sarah Dayan</h3>
                <p className='text-sm text-gray-500 dark:text-gray-400'>@frontstuff_io · 2h</p>
              </div>
            </div>
            <div className='space-y-2'>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                I just published a new article on my blog about the latest updates in React. Check it out and let me
                know what you think!
              </p>
              <img
                alt='Cover image'
                className='aspect-video overflow-hidden rounded-lg object-cover object-center'
                height='250'
                src='https://www.freecodecamp.org/news/content/images/size/w2000/2021/03/key-difference-between-coding-and-programming--2-.png'
                width='500'
              />
            </div>
          </div>
          <div className='space-y-2 border-t pt-4'>
            <div className='flex items-center space-x-2'>
              <Button className='rounded-full p-2' size='icon' variant='ghost'>
                <HeartIcon className='w-4 h-4' />
                <span className='sr-only'>Like</span>
              </Button>
              <Button className='rounded-full p-2' size='icon' variant='ghost'>
                <MessageSquareIcon className='w-4 h-4' />
                <span className='sr-only'>Comment</span>
              </Button>
              <Button className='rounded-full p-2' size='icon' variant='ghost'>
                <RepeatIcon className='w-4 h-4' />
                <span className='sr-only'>Retweet</span>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </main>
  )
}
