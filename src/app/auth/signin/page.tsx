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
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { signIn } from 'next-auth/react'

const formSchema = z.object({
  email: z.string().email({ message: 'Ingresa un correo válido.' }),
  password: z.string().min(6, {
    message: 'La contraseña debe tener al menos 6 caracteres.'
  })
})

export default function UserLoginForm (): JSX.Element {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  function onSubmit (values: z.infer<typeof formSchema>): void {
    setLoading(true)

    signIn('credentials', { ...values, redirect: false })
      .then((res) => {
        if (!((res?.ok) ?? false)) return toast.error(res?.error ?? 'Error al iniciar sesión')
        toast.success('Inicio de sesión exitoso.')
        router.replace('/dash')
      })
      .finally(() => setLoading(false))
  }

  return (
    <div className='lg:p-8'>
      <div className='mx-auto my-4 lg:hidden flex justify-center'>
        <Logo className='w-32 h-32' />
      </div>
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name='email'
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
              <Button className='mt-5 w-full' disabled={loading}>
                {loading && (
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
