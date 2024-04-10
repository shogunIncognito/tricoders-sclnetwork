import { Icons } from '../icons'

export default function Loading (): JSX.Element {
  return (
    <div className='w-max h-max m-auto pb-36'>
      <Icons.Spinner className='animate-spin h-10 w-10' />
    </div>
  )
}
