/* eslint-disable @typescript-eslint/restrict-template-expressions */
'use client'

import Loading from '@/components/profile/Loading'
import useFetch from '@/hooks/useFetch'
import { User } from '@/types/types'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function page (): JSX.Element {
  const query = useSearchParams().get('q')
  const { data: usersFound, loading } = useFetch(`/api/users?q=${query}`)
  const router = useRouter()

  useEffect(() => {
    if (query === null || query === '') router.replace('/dash')
  }, [query])

  if (loading) return <Loading />

  return (
    <section className='m-4 flex flex-col gap-3'>
      {usersFound.map((user: User) => (
        <Link key={user._id} href={`/dash/profile/${user._id}`} className='flex items-center gap-2'>
          <img
            className='rounded-full'
            height='38'
            src={user.image}
            style={{
              aspectRatio: '40/40',
              objectFit: 'cover'
            }}
            width='38'
          />
          <p>{user.username}</p>
        </Link>
      ))}
    </section>
  )
}
