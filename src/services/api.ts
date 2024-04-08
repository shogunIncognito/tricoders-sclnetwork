import axios from 'axios'

export const getLoginImage = async (): Promise<any> => {
  const response = await axios.get('https://source.unsplash.co/1920x1080/?software')
  return { url: response?.request.responseURL, status: true }
}

export const signUp = async (data: SignUp): Promise<void> => {
  const response = await axios.post('/api/auth/signup', data)
  return response.data
}
