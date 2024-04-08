'use client'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Icons } from '@/components/icons'
import { useState } from 'react'

export default function UserLoginForm (): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  function handleSubmit (event: React.SyntheticEvent): void {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className='lg:p-8'>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
        <div className='flex flex-col space-y-2 text-center'>
          <h1 className='text-2xl font-semibold tracking-tight'>
            Inicia sesión
          </h1>
          <p className='text-sm text-muted-foreground'>
            Ingresa tu correo y contraseña para acceder a tu cuenta.
          </p>
        </div>

        <div className='grid gap-6'>
          <form onSubmit={handleSubmit}>
            <div className='grid gap-2'>
              <div className='grid gap-1'>
                <Label className='sr-only' htmlFor='email'>
                  Email
                </Label>
                <Input
                  id='email'
                  placeholder='name@example.com'
                  type='email'
                  autoCapitalize='none'
                  autoComplete='email'
                  autoCorrect='off'
                  disabled={isLoading}
                />
              </div>

              <div className='grid gap-1'>
                <Label className='sr-only' htmlFor='password'>
                  Password
                </Label>
                <Input
                  id='password'
                  placeholder='Contraseña'
                  type='password'
                  autoCapitalize='none'
                  autoComplete='current-password'
                  autoCorrect='off'
                  disabled={isLoading}
                />
              </div>

              <Button className='mt-4' disabled={isLoading}>
                {isLoading && (
                  <Icons.Spinner className='mr-2 h-4 w-4 animate-spin' />
                )}
                Iniciar sesión
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}
