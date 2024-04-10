import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { useFetchResponse } from '../../types'

export default function useFetch (url: string): useFetchResponse {
  const [data, setData] = useState(null)
  const [error, setError] = useState<AxiosError | null>(null)
  const [loading, setLoading] = useState(true)

  const getData = async (): Promise<void> => {
    try {
      const response = await axios.get(url)
      setData(response.data)
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
