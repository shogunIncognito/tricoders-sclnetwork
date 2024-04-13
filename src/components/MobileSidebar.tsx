import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import Logo from './Logo'
import { LucideIcon, Menu, Unplug } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface MobileSideBarProps {
  routes: Array<{
    label: string
    icon: LucideIcon
    href: string
  }>
  path: string
  closeSession: () => void
}

export default function MobileSideBar ({ routes, path, closeSession }: MobileSideBarProps): JSX.Element {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className='md:hidden'>
        <Button variant='outline'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='mx-auto'><Logo /></SheetTitle>
        </SheetHeader>
        <div className='flex-1 overflow-auto py-2'>
          <nav className='grid items-start text-sm font-medium'>
            {routes.map(route => (
              <Link
                key={route.label}
                className={`flex items-center gap-3 rounded-lg px-3 py-3 transition-all ${path === route.href ? 'bg-gray-800' : ''} text-gray-50 hover:text-gray-300`}
                href={route.href}
                onClick={() => setOpen(false)}
              >
                <route.icon className='h-4 w-4' />
                {route.label}
              </Link>
            ))}
            <button className='flex items-center gap-3 rounded-lg px-3 py-3 transition-all text-gray-50 hover:text-gray-300' onClick={closeSession}>
              <Unplug className='h-4 w-4' />
              Cerrar Sesión
            </button>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
