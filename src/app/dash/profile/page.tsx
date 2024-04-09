import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { FileTextIcon, StarIcon, UsersIcon } from 'lucide-react'
import Link from 'next/link'

export default function page (): JSX.Element {
  return (
    <main className='flex flex-1 lg:w-3/4 mx-auto flex-col gap-4 p-4 md:gap-8 md:p-6'>
      <div className='grid items-start gap-4 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr_300px]'>
        <div className='flex flex-col gap-2 md:gap-4'>
          <div className='flex items-center gap-2'>
            <img
              alt='Avatar'
              className='rounded-full border'
              height='80'
              src='https://i.pravatar.cc/300'
              style={{
                aspectRatio: '80/80',
                objectFit: 'cover'
              }}
              width='80'
            />
            <div className='flex flex-col'>
              <h1 className='font-semibold text-xl'>John Doe</h1>
              <p className='text-sm text-gray-500 dark:text-gray-400'>@johndoe</p>
            </div>
          </div>
          <div className='grid items-start gap-1 text-sm'>
            <p>
              <span className='font-semibold'>Bio:</span>
              Software Engineer | Open Source Contributor
            </p>
            <p>
              <span className='font-semibold'>Location:</span>
              San Francisco, CA
            </p>
            <p>
              <span className='font-semibold'>Website:</span> <Link href='#'>example.com</Link>
            </p>
          </div>
        </div>
        <div className='grid items-start gap-4 text-sm'>
          <div className='flex items-center gap-2'>
            <UsersIcon className='h-4 w-4' />
            <span className='font-semibold'>Followers</span>
            <span className=''>1200</span>
          </div>
          <div className='flex items-center gap-2'>
            <UsersIcon className='h-4 w-4' />
            <span className='font-semibold'>Following</span>
            <span className=''>520</span>
          </div>
          <div className='flex items-center gap-2'>
            <FileTextIcon className='h-4 w-4' />
            <span className='font-semibold'>Posts</span>
            <span className=''>24</span>
          </div>
        </div>
        <div className='grid items-start gap-2 text-sm'>
          <h2 className='font-semibold text-lg'>Latest Posts</h2>
          <div className='flex flex-col gap-2'>
            <div className='flex items-start gap-2'>
              <img
                alt='Post image'
                className='aspect-square rounded-md object-cover'
                height='64'
                src='/placeholder.svg'
                width='64'
              />
              <div className='flex flex-col gap-1'>
                <p className='font-semibold'>New blog post!</p>
                <p className='text-sm'>
                  Check out my latest blog post on the importance of open-source software in today's world.
                </p>
              </div>
            </div>
            <div className='flex items-start gap-2'>
              <img
                alt='Post image'
                className='aspect-square rounded-md object-cover'
                height='64'
                src='/placeholder.svg'
                width='64'
              />
              <div className='flex flex-col gap-1'>
                <p className='font-semibold'>Just released!</p>
                <p className='text-sm'>
                  Excited to announce the release of my new mobile app! Give it a try and let me know what you
                  think.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid items-start gap-4 text-sm'>
        <h2 className='font-semibold text-lg'>Featured Projects</h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <Card className='flex flex-col gap-2'>
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>Project Name</CardTitle>
              <Button className='rounded-full w-8 h-8' size='icon'>
                <StarIcon className='w-4 h-4' />
                <span className='sr-only'>Star</span>
              </Button>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Description of the project and what it does. You can add more information here.
              </p>
            </CardContent>
            <CardFooter>
              <Button size='sm'>View Project</Button>
            </CardFooter>
          </Card>
          <Card className='flex flex-col gap-2'>
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>Project Name</CardTitle>
              <Button className='rounded-full w-8 h-8' size='icon'>
                <StarIcon className='w-4 h-4' />
                <span className='sr-only'>Star</span>
              </Button>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Description of the project and what it does. You can add more information here.
              </p>
            </CardContent>
            <CardFooter>
              <Button size='sm'>View Project</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className='grid items-start gap-4 text-sm'>
        <h2 className='font-semibold text-lg'>Trending Topics</h2>
        <div className='flex flex-wrap gap-2'>
          <Button size='sm' variant='outline'>
            #webdevelopment
          </Button>
          <Button size='sm' variant='outline'>
            #opensource
          </Button>
          <Button size='sm' variant='outline'>
            #javascript
          </Button>
          <Button size='sm' variant='outline'>
            #coding
          </Button>
          <Button size='sm' variant='outline'>
            #github
          </Button>
          <Button size='sm' variant='outline'>
            #programming
          </Button>
          <Button size='sm' variant='outline'>
            #100daysofcode
          </Button>
          <Button size='sm' variant='outline'>
            #linux
          </Button>
        </div>
      </div>
    </main>
  )
}
