/* eslint-disable @typescript-eslint/no-non-null-assertion */
import useFetch from '@/hooks/useFetch'
import { useFetchFollowingResponse } from '@/types/types'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Icons } from '../icons'

export default function UsersFollowing (): JSX.Element {
  const { data } = useSession()
  const { data: usersFollowing, loading }: useFetchFollowingResponse = useFetch(`api/users/${data!.user._id}/following`)

  return (
    <aside className='hidden w-44 lg:w-60 lg:flex flex-col border-r border-gray-700 bg-gray-900/40'>
      <div className='flex items-center gap-4 px-6 py-2'>
        <span className='text-lg font-semibold text-gray-50'>Siguiendo</span>
      </div>
      <div className='flex-1 overflow-y-auto w-3/4 ml-5 overflow-x-hidden flex flex-col gap-3 py-2'>
        {usersFollowing === null || loading
          ? (
            <Icons.Spinner className='w-8 h-8 mx-auto mt-20 animate-spin' />
            )
          : (
              usersFollowing.length === 0
                ? (
                  <span className='text-gray-300 text-center'>No sigues a nadie</span>
                  )
                : (
                    usersFollowing.map(user => (
                      <Link key={user._id} href={`/dash/profile/${user._id}`} className='flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-gray-800 transition-all'>
                        <img
                          className='w-8 h-8 rounded-full'
                          src={user.image}
                          alt={user.username}
                        />
                        <span className='text-gray-50'>{user.username}</span>
                      </Link>
                    )
                    )
                  )
            )}
      </div>
    </aside>
  )
}
