import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { BookMarked, HomeIcon, Package2Icon, SearchIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'

export default function Home ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className='h-screen w-full min-h-screen flex'>
      <div className='hidden border-r border-gray-700 bg-gray-100/40 lg:block dark:bg-gray-800/40'>
        <div className='flex h-full flex-col gap-2'>
          <div className='flex h-[60px] items-center justify-center border-b border-gray-700 px-6'>
            <Logo className='h-10 w-10' />
            <span className=''>Tri-Coders</span>
          </div>
          <div className='flex-1 overflow-auto py-2'>
            <nav className='grid items-start px-4 text-sm font-medium'>
              <Link
                className='flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-3 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50'
                href='#'
              >
                <HomeIcon className='h-4 w-4' />
                Inicio
              </Link>
              <Link
                className='flex items-center gap-3 rounded-lg px-3 py-3 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                href='#'
              >
                <BookMarked className='h-4 w-4' />
                Mis Publicaciones
              </Link>
              <Link
                className='flex items-center gap-3 rounded-lg px-3 py-3 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                href='#'
              >
                <UserIcon className='h-4 w-4' />
                Perfil
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className='flex flex-col flex-1'>
        <header className='flex h-20 lg:h-[60px] items-center gap-4 border-b border-gray-700 bg-gray-100/40 px-6 py-2 dark:bg-gray-800/40'>
          <Link className='lg:hidden' href='#'>
            <Package2Icon className='h-6 w-6' />
            <span className='sr-only'>Home</span>
          </Link>
          <div className='w-full flex-1'>
            <form>
              <div className='relative'>
                <SearchIcon className='absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400' />
                <Input
                  className='w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950'
                  placeholder='Search users...'
                  type='search'
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className='rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800'
                size='icon'
                variant='ghost'
              >
                <img
                  alt='Avatar'
                  className='rounded-full'
                  height='40'
                  src='https://i.pravatar.cc/300'
                  style={{
                    aspectRatio: '32/32',
                    objectFit: 'cover'
                  }}
                  width='40'
                />
                <span className='sr-only'>Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {children}
      </div>
    </div>
  )
}
