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
            <span className='font-semibold'>Seguidores</span>
            <span>1200</span>
          </div>
          <div className='flex items-center gap-2'>
            <UsersIcon className='h-4 w-4' />
            <span className='font-semibold'>Siguiendo</span>
            <span>520</span>
          </div>
          <div className='flex items-center gap-2'>
            <FileTextIcon className='h-4 w-4' />
            <span className='font-semibold'>Publicaciones</span>
            <span>24</span>
          </div>
        </div>
        <div className='grid items-start gap-2 text-sm'>
          <h2 className='font-semibold text-lg'>Ultimas publicaciones</h2>
          <div className='flex flex-col gap-2'>
            <div className='flex items-start gap-2'>
              <img
                alt='Post image'
                className='aspect-square rounded-md object-cover'
                height='64'
                src='https://raw.githubusercontent.com/antonshell/placeholder-service/master/resources/test_images/img.png'
                width='64'
              />
              <div className='flex flex-col gap-1'>
                <p className='font-semibold'>Nuevo blog</p>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className='flex items-start gap-2'>
              <img
                alt='Post image'
                className='aspect-square rounded-md object-cover'
                height='64'
                src='https://raw.githubusercontent.com/antonshell/placeholder-service/master/resources/test_images/img.png'
                width='64'
              />
              <div className='flex flex-col gap-1'>
                <p className='font-semibold'>PHP esta muerto?</p>
                <p className='text-sm'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid items-start gap-4 text-sm'>
        <h2 className='font-semibold text-lg'>Proyectos destacados</h2>
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
        <h2 className='font-semibold text-lg'>Tags</h2>
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
