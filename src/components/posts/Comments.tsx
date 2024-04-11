import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
// import useFetch from '@/hooks/useFetch'

export default function Comments ({ open, setOpen }: { open: boolean, setOpen: (value: any) => void }): JSX.Element {
//   const { data, loading } = useFetch('api/posts/id/comments')
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
      </DialogContent>
    </Dialog>
  )
}
