import Image from 'next/image'
import tricoderslogo from '../assets/tricoderslogo.webp'
import Link from 'next/link'

export default function Logo (props: any): JSX.Element {
  return (
    <Link className='flex items-center space-x-2 font-bold' href='/'>
      <Image src={tricoderslogo} alt='Tricoders' width={80} height={80} {...props} />
    </Link>
  )
}
