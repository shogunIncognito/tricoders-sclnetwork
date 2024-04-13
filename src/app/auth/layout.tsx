'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'
import Logo from '@/components/Logo'
import { useEffect, useState } from 'react'
import { getLoginImage } from '@/services/api'
import { Icons } from '@/components/icons'
import { useSession } from 'next-auth/react'

export default function AuthenticationPage ({ children }: { children: React.ReactNode }): JSX.Element {
  const [image, setImage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { status } = useSession()
  const path = usePathname()
  const router = useRouter()
  useEffect(() => {
    setIsLoading(true)
    getLoginImage()
      .then(res => setImage(res.url))
      .catch(() => setImage(''))
      .finally(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/dash')
    }
  }, [status])

  if (status === 'loading' || status === 'authenticated') {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Icons.Spinner className='w-8 h-8 animate-spin' />
      </div>
    )
  }

  return (
    <div className='container relative min-h-screen h-[800px] flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <Link
        href={path === '/auth/signin' ? '/auth/signup' : '/auth/signin'}
        className={cn(
          'absolute right-4 top-4 md:right-8 md:top-8 hover:underline'
        )}
      >
        {path === '/auth/signin' ? 'Registrarse' : 'Iniciar Sesión'}
      </Link>
      <div className='relative hidden h-full flex-col bg-muted p-10 text-white lg:flex border-r border-neutral-600'>
        <div className='absolute inset-0 bg-zinc-900' />
        <div className='relative z-20 flex items-center text-lg font-medium'>
          <Logo className='w-32 h-32' />
        </div>
        {isLoading || image === ''
          ? <Icons.Spinner className='absolute inset-0 w-8 h-8 m-auto animate-spin' />
          : (
            <img className='absolute inset-0 object-cover w-full h-full' src={image} />
            )}
      </div>
      {children}
    </div>
  )
}
