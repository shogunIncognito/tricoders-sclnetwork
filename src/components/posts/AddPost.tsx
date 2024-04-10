/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { ImageIcon } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { useState } from 'react'
import axios from 'axios'
import { createPost } from '@/services/api'
import { toast } from 'sonner'
import { Icons } from '../icons'
import { Post } from '../../types/types'
import { useSession } from 'next-auth/react'

export default function AddPost ({ setPost }: { setPost: (val: any) => void }): JSX.Element {
  const [image, setImage] = useState<{ url: string | null, file: File | null }>({ url: null, file: null })
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const { data } = useSession()

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files === null) return
    const file = e.target.files[0]
    const url = URL.createObjectURL(file)

    setImage({ file, url })
  }

  const handleCreate = async (): Promise<void> => {
    try {
      if (!content || !image.file) return
      if (!data) return

      setLoading(true)
      const formData = new FormData()
      formData.append('file', image.file)
      formData.append('upload_preset', process.env.NEXT_PUBLIC_UPLOAD_PRESET as string)
      formData.append('cloud_name', process.env.NEXT_PUBLIC_CLOUD_NAME as string)

      const res = await axios.post('https://api.cloudinary.com/v1_1/ddxmom2c3/image/upload', formData)
      const newPost = await createPost({ content, image: res.data.url, id_user: data.user._id })

      toast.success('Publicación creada')
      setPost((prev: Post[]) => [newPost, ...prev])
      setOpen(false)
    } catch (error) {
      console.error(error)
      toast.error('Error al crear la publicación')
    } finally {
      setLoading(false)
      setContent('')
      setImage({ url: null, file: null })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className='m-3 w-32 ml-auto absolute left-6' onClick={() => setOpen(true)}>Crear publicación</Button>
      </DialogTrigger>
      <DialogContent className='max-w-[80%] sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Publica que piensas</DialogTitle>
          <DialogDescription>
            Cuando termines, haz clic en Publicar.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='flex items-center gap-4'>
            <Input
              id='name'
              className='w-full'
              placeholder='¿Que piensas?'
              required
              onChange={e => setContent(e.target.value)}
              value={content}
            />
            <label className='hover:opacity-75 cursor-pointer transition-opacity'>
              <ImageIcon className='w-6 h-6' />
              <input type='file' onChange={handleImage} hidden accept='image/*' />
            </label>
          </div>
        </div>

        {image?.url !== null && (
          <img
            alt='Cover image'
            className='aspect-video w-full overflow-hidden rounded-lg object-cover object-center'
            height='250'
            src={image?.url}
            width='500'
          />
        )}

        <DialogFooter>
          <Button onClick={handleCreate} disabled={loading} className='w-full mx-auto'>
            {loading && (
              <Icons.Spinner className='mr-2 h-4 w-4 animate-spin' />
            )}
            Publicar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
