'use client'

import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { BookMarked, HomeIcon, SearchIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const routes = [
  {
    label: 'Inicio',
    icon: HomeIcon,
    href: '/dash'
  },
  {
    label: 'Mis Publicaciones',
    icon: BookMarked,
    href: '/dash/myposts'
  },
  {
    label: 'Perfil',
    icon: UserIcon,
    href: '/dash/profile'
  }
]

export default function Home ({ children }: { children: React.ReactNode }): JSX.Element {
  const path = usePathname()

  return (
    <div className='h-screen w-full max-h-screen min-h-screen flex fixed'>
      <div className='hidden border-r border-gray-700 lg:block bg-gray-900/40'>
        <div className='flex h-full flex-col gap-2'>
          <div className='flex h-[57px] min-h-[57px] items-center justify-center border-b border-gray-700 px-6 py-2'>
            <Logo className='h-10 w-10' />
            <span className=''>Tri-Coders</span>
          </div>
          <div className='flex-1 overflow-auto py-2'>
            <nav className='grid items-start px-4 text-sm font-medium'>
              {routes.map(route => (
                <Link
                  key={route.label}
                  className={`flex items-center gap-3 rounded-lg px-3 py-3 transition-all ${path === route.href ? 'bg-gray-800' : ''} text-gray-50 hover:text-gray-300`}
                  href={route.href}
                >
                  <route.icon className='h-4 w-4' />
                  {route.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className='flex flex-col flex-1'>
        <header className='flex h-20 lg:h-[57px] items-center gap-4 border-b border-gray-700 bg-gray-100/40 px-6 py-2 dark:bg-gray-900/40'>
          <Logo className='h-12 w-12 lg:hidden' />
          <span className='sr-only'>Inicio</span>
          <div className='w-full flex-1'>
            <form>
              <div className='relative'>
                <SearchIcon className='absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400' />
                <Input
                  className='w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950'
                  placeholder='Buscar devs...'
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
              <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href='/dash/profile/settings'>
                  Ajustes
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Cerrar sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {children}

      </div>
    </div>
  )
}
