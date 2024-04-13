/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Post } from '@/types/types'
import { HeartIcon, MessageSquareIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { useSession } from 'next-auth/react'
import { Input } from '../ui/input'
import { useState } from 'react'
import { createComment } from '@/services/api'
import { toast } from 'sonner'
import { Icons } from '../icons'

interface CommentsProps {
  post: Post | null
  setOpen: (value: any) => void
  sendLike: (postId: string) => void
  setPosts: (value: any) => void
}

export default function Comments ({ post, setOpen, sendLike, setPosts }: CommentsProps): JSX.Element | null {
  const { data } = useSession()
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)

  if (!post) return null

  const handleComment = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (comment === '') {
      toast.error('Debes escribir un comentario')
      return
    }

    setLoading(true)
    createComment(comment, data!.user._id, post._id)
      .then(newPost => {
        toast.success('Comentario creado')
        setOpen(newPost)
        setPosts((prev: Post[]) => prev.map(p => {
          if (p._id === newPost._id) return newPost
          return p
        })
        )
        setComment('')
      })
      .catch(() => toast.error('Error creando comentario'))
      .finally(() => setLoading(false))
  }

  const isLiked = post.likes.includes(data!.user._id)
  return (
    <Dialog open={!!post} onOpenChange={setOpen}>
      <DialogContent className='max-w-[80%] max-h-[80%] overflow-auto sm:max-w-[545px]'>
        <div className='overflow-auto max-h-full mt-5 px-2'>
          <DialogHeader>
            <div className='space-y-2 w-full'>
              <div className='flex items-center space-x-2'>
                <img
                  alt={post.id_user.username}
                  className='rounded-full'
                  height='40'
                  src={post.id_user.image}
                  style={{
                    aspectRatio: '40/40',
                    objectFit: 'cover'
                  }}
                  width='40'
                />
                <div>
                  <h3 className='text-base font-semibold'>{post.id_user.username}</h3>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>{post.id_user.email}</p>
                </div>
              </div>
              <div className='space-y-2'>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  {post.content}
                </p>
                <img
                  alt='Cover image'
                  className='w-full overflow-hidden rounded-lg object-cover object-center'
                  src={post.image}
                />
              </div>
            </div>
            <div className='space-y-2 border-t border-gray-600 pt-4 w-full'>
              <div className='flex items-center gap-3'>
                <div className='flex items-center gap-1'>
                  <Button onClick={() => sendLike(post._id)} className='rounded-full p-2' size='icon' variant='ghost'>
                    <HeartIcon className={`w-4 h-4 ${isLiked ? 'text-red-500' : ''}`} />
                  </Button>
                  <span className='opacity-80 ml-0'>{post.likes.length}</span>
                </div>
                <div className='flex items-center gap-1'>
                  <Button className='rounded-full p-2' size='icon' variant='ghost'>
                    <MessageSquareIcon className='w-4 h-4' />
                  </Button>
                  <span className='opacity-80 ml-0'>{post.id_comment.length}</span>
                </div>
              </div>
            </div>
          </DialogHeader>
          <DialogTitle className='my-5'>Comentarios</DialogTitle>
          <div className='space-y-8 mt-2 max-h-fit'>
            {post.id_comment.length === 0
              ? (
                <div className='text-center my-5 text-gray-500 dark:text-gray-400'>
                  No hay comentarios
                </div>
                )
              : (
                  post.id_comment.map((comment) => (
                    <div key={comment._id} className='flex items-center gap-3'>
                      <img
                        alt={comment.username}
                        className='rounded-full'
                        height='40'
                        src={comment.image}
                        style={{
                          aspectRatio: '40/40',
                          objectFit: 'cover'
                        }}
                        width='40'
                      />
                      <div>
                        <h3 className='text-base font-semibold'>{comment.username}</h3>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>{comment.content}</p>
                      </div>
                    </div>
                  ))
                )}
          </div>
        </div>
        <DialogFooter>
          <form onSubmit={handleComment} className='flex w-full items-center justify-between'>
            <Input
              className='w-full px-4 py-2 rounded-lg border border-gray-700 dark:border-gray-600'
              placeholder='Escribe un comentario...'
              onChange={(e) => setComment(e.target.value)}
              type='text'
              disabled={loading}
            />
            <Button className='ml-2' size='sm' variant='secondary' disabled={loading}>
              {loading && (
                <Icons.Spinner className='mr-2 h-4 w-4 animate-spin' />
              )}
              Publicar
            </Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
