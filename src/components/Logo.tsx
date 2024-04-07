import Image from 'next/image'
import tricoderslogo from '../assets/tricoderslogo.webp'

export default function Logo (props: any): JSX.Element {
  return (
    <Image src={tricoderslogo} alt='Tricoders' width={80} height={80} {...props} />
  )
}
