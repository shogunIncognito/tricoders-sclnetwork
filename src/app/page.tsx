'use client'

import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import codeImage from '@/assets/home/home-code-image.webp'
import Link from 'next/link'
import Image from 'next/image'

export default function Home (): JSX.Element {
  return (
    <main className='flex flex-col min-h-screen'>
      <header className='flex-1'>
        <div className='bg-neutral-950 flex p-4 md:flex-row flex-col border-b border-gray-600 mb-8 items-center justify-around px-4 md:px-6'>
          <nav className='flex items-center space-x-4'>
            <Logo className='w-28' />
          </nav>

          <div className='flex items-center space-x-4'>
            <Link href='/auth/signup'>
              <Button>Regístrate</Button>
            </Link>
            <Link href='/auth/signin'>
              <Button>Inicia sesión</Button>
            </Link>
          </div>
        </div>
        <div className='container py-16 text-center md:py-24 lg:py-24'>
          <div className='space-y-4'>
            <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>
              Conéctate con otros desarrolladores
            </h1>
            <p className='max-w-[730px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
              ¡Únete a nuestra comunidad de desarrolladores! Conecta con colegas, comparte conocimientos, y mantente al tanto de las últimas tendencias en tecnología.
            </p>
          </div>
        </div>
      </header>

      <main className='flex-1'>
        <div className='py-12 md:py-24 lg:py-32'>
          <div className='container grid items-center gap-10 px-4 text-center md:px-6 lg:gap-20 lg:grid-cols-2 xl:gap-32'>
            <div className='space-y-4'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>Creado para la colaboración</h2>
              <div className='max-w-prose mx-auto space-y-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                <p>
                  Únete a una comunidad de desarrolladores donde la colaboración es clave. Desde compartir proyectos emocionantes hasta colaborar en ideas innovadoras, nuestra plataforma te brinda el espacio perfecto para crecer profesionalmente y construir relaciones significativas en el mundo del desarrollo. ¡Únete hoy y sé parte de la conversación!
                </p>
              </div>
            </div>
            <div className='mx-auto w-full aspect-video overflow-hidden rounded-xl lg:w-auto lg:aspect-none'>
              <Image alt='code-image' className='aspect-video mx-auto' height={337} src={codeImage} width={600} />
            </div>
          </div>
        </div>

        <div className='py-12 lg:py-24 bg-neutral-950 border-t border-gray-700'>
          <div className='container grid items-center gap-10 px-4 md:px-6 xl:gap-20'>
            <div className='space-y-4 text-center lg:space-y-8'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>Iteración ágil, innovación continua</h2>
              <div className='max-w-3xl mx-auto space-y-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                <p>
                  En nuestra plataforma, fomentamos la innovación constante. Dedica tu tiempo a crear nuevas soluciones mientras nosotros nos encargamos de la infraestructura y las pruebas, permitiéndote mantener un ritmo de desarrollo ágil y lleno de innovación.
                </p>
              </div>
            </div>
            <div className='grid max-w-sm gap-1 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mx-auto'>
              <div className='grid gap-1'>
                <h3 className='text-lg font-bold'>Escalabilidad infinita, cero configuración</h3>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  Desarrolla sin preocupaciones sobre la escalabilidad y la gestión de infraestructura. Nosotros nos encargamos para que puedas enfocarte en lo que realmente importa: la creación de conexiones y proyectos innovadores.
                </p>
              </div>
              <div className='grid gap-1'>
                <h3 className='text-lg font-bold'>Información y controles en tiempo real</h3>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  Accede y comunicate con otros desarrolladores en nuestra red social. La comunicación directa y la colaboración son clave para impulsar la innovación y mejorar la experiencia de todos en nuestra plataforma.
                </p>
              </div>
              <div className='grid gap-1'>
                <h3 className='text-lg font-bold'>Personalización total para tu experiencia</h3>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  Personalizamos cada aspecto de nuestra red social para adaptarnos a tus necesidades y preferencias. Desde la interfaz hasta las funcionalidades, todo está diseñado para ofrecerte la mejor experiencia posible y fomentar tu participación en la comunidad de desarrolladores.
                </p>
              </div>
            </div>
          </div>
        </div>

      </main>

      <footer className='border-t py-12 border-gray-700'>
        <div className='container flex flex-col gap-4 items-center justify-center text-center px-4 md:px-6'>
          <div className='flex items-center justify-center gap-2'>
            <Link
              className='rounded-full border w-8 h-8 flex items-center justify-center shadow-sm transition-colors hover:bg-white hover:text-black'
              href='#'
              title='GitHub'
            >
              <Github className='w-5 h-5' />
              <span className='sr-only'>GitHub</span>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
