/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Post } from '@/types/types'
import { HeartIcon, MessageSquareIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { useSession } from 'next-auth/react'
import { Input } from '../ui/input'
import { useState } from 'react'

interface CommentsProps {
  post: Post | null
  setOpen: (value: any) => void
  sendLike: (postId: string) => void
}

export default function Comments ({ post, setOpen, sendLike }: CommentsProps): JSX.Element | null {
  const { data } = useSession()
  const [comment, setComment] = useState('')

  if (!post) return null

  console.log(post)

  const handleComment = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    console.log(comment)
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
            {/* {post.id_comment.map((comment, i) => ( */}
            {Array.from({ length: 5 }).map((comment, i) => (
              <div key={i} className='flex items-center border-b border-gray-700 pb-4 space-x-2'>
                <img
                  alt='aaaa'
                  className='rounded-full'
                  height='40'
                  src='https://i.pravatar.cc/300'
                  style={{
                    aspectRatio: '40/40',
                    objectFit: 'cover'
                  }}
                  width='40'
                />
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>Miguel</p>
                  <h3 className='text-base font-semibold'>Hola esta muy feo ese carro con todo respeto</h3>
                </div>
              </div>
            // <div key={i} className='flex items-center space-x-2'>
            //   <img
            //     alt={comment.id_user.username}
            //     className='rounded-full'
            //     height='40'
            //     src={comment.id_user.image}
            //     style={{
            //       aspectRatio: '40/40',
            //       objectFit: 'cover'
            //     }}
            //     width='40'
            //   />
            //   <div>
            //     <h3 className='text-base font-semibold'>{comment.id_user.username}</h3>
            //     <p className='text-sm text-gray-500 dark:text-gray-400'>{comment.id_user.email}</p>
            //   </div>
            // </div>
            ))}
          </div>
        </div>
        <DialogFooter>
          <form onSubmit={handleComment} className='flex w-full items-center justify-between'>
            <Input
              className='w-full px-4 py-2 rounded-lg border border-gray-700 dark:border-gray-600'
              placeholder='Escribe un comentario...'
              onChange={(e) => setComment(e.target.value)}
              type='text'
            />
            <Button className='ml-2' size='sm' variant='secondary'>
              Enviar
            </Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
