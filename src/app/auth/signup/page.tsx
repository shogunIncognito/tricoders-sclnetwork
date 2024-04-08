/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Icons } from '@/components/icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Logo from '@/components/Logo'

const formSchema = z.object({
  username: z.string().email({ message: 'Ingresa un correo válido.' }),
  password: z.string().min(6, {
    message: 'La contraseña debe tener al menos 6 caracteres.'
  }),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden.',
  path: ['confirmPassword']
})

export default function UserRegisterForm (): JSX.Element {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  })

  function onSubmit (values: z.infer<typeof formSchema>): void {
    setIsLoading(true)
    console.log(values)
    // magia de nextauth
    setIsLoading(false)
  }

  return (
    <div className='lg:p-8'>
      <div className='mx-auto my-4 lg:hidden flex justify-center'>
        <Logo className='w-32 h-32' />
      </div>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
        <div className='flex flex-col space-y-2 text-center'>
          <h1 className='text-2xl font-semibold tracking-tight'>
            Regístrate
          </h1>
          <p className='text-sm text-muted-foreground'>
            Ingresa un correo y contraseña para crear tu cuenta.
          </p>
        </div>

        <div className='grid gap-6'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='dark:text-white'>Correo</FormLabel>
                    <FormControl>
                      <Input placeholder='user@example.com' {...field} />
                    </FormControl>
                    <FormMessage className='dark:text-red-400/80' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='dark:text-white'>Contraseña</FormLabel>
                    <FormControl>
                      <Input type='password' placeholder='********' {...field} />
                    </FormControl>
                    <FormMessage className='dark:text-red-400/80' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='dark:text-white'>Confirmar contraseña</FormLabel>
                    <FormControl>
                      <Input type='password' placeholder='********' {...field} />
                    </FormControl>
                    <FormMessage className='dark:text-red-400/80' />
                  </FormItem>
                )}
              />
              <Button className='mt-5' disabled={isLoading}>
                {isLoading && (
                  <Icons.Spinner className='mr-2 h-4 w-4 animate-spin' />
                )}
                Iniciar sesión
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>

  )
}
