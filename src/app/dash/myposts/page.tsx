import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription } from '@/components/ui/card'
import { HeartIcon, MessageSquareIcon } from 'lucide-react'

export default function MyPosts (): JSX.Element {
  return (
    <main className='overflow-auto gap-2 p-8 w-full grid-res flex items-center'>
      {Array.from({ length: 8 }).map((_, i) => (
        <Card key={i} className='p-4'>
          <CardContent>
            <img
              alt='Avatar'
              className='rounded-full mt-2'
              height='40'
              src='https://i.pravatar.cc/300'
              style={{
                aspectRatio: '40/40',
                objectFit: 'cover'
              }}
              width='40'
            />
            <div className='space-y-1 mb-1'>
              <h3 className='text-base font-semibold'>Sarah Dayan</h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>@frontstuff_io · 2h</p>
            </div>
            <CardDescription className='whitespace-nowrap overflow-hidden text-ellipsis mb-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
              erat sit amet elit lacinia tincidunt. Nullam nec mauris et nisl
              tristique gravida
            </CardDescription>
            <CardDescription>
              <img
                alt='Cover image'
                className='aspect-video w-full overflow-hidden rounded-lg object-cover object-center'
                height='250'
                src='https://www.freecodecamp.org/news/content/images/size/w2000/2021/03/key-difference-between-coding-and-programming--2-.png'
                width='500'
              />
            </CardDescription>
            <div className='space-y-2 border-t pt-4 w-full'>
              <div className='flex items-center space-x-2'>
                <Button className='rounded-full p-2' disabled size='icon' variant='ghost'>
                  <HeartIcon className='w-4 h-4' />
                </Button>
                <span className='opacity-50'>2</span>
                <Button className='rounded-full p-2' size='icon' variant='ghost'>
                  <MessageSquareIcon className='w-4 h-4' />
                </Button>
                <span className='opacity-80'>3</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </main>
  )
}
