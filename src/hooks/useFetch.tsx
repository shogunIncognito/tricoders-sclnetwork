import { AxiosError } from 'axios'
import { getLoginImage, getPosts } from '@/services/api'
import { useEffect, useState } from 'react'
import { useFetchResponse } from '../../types'

const endpoints: Keys = {
  posts: async () => await getPosts(),
  loginImage: async () => await getLoginImage()
}

interface Keys {
  [key: string]: () => Promise<any>
}

export default function useFetch (url: 'posts' | 'loginImage'): useFetchResponse {
  const [data, setData] = useState(null)
  const [error, setError] = useState<AxiosError | null>(null)
  const [loading, setLoading] = useState(true)

  const getData = async (): Promise<void> => {
    try {
      const response = await endpoints[url]()
      setData(response)
    } catch (error) {
      if (error instanceof AxiosError) setError(error)
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void getData()
  }, [])

  const setValue = (data: any): void => {
    setData(data)
  }

  return { data, error, loading, setValue }
}
