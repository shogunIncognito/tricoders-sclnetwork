import mongoose from 'mongoose'

export const dbConnect = async (): Promise<Boolean | undefined> => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI as string)

    if (connection.readyState === 1) {
      console.log('Database connected')
      return await Promise.resolve(true)
    }
  } catch (error) {
    console.log(error)
    return await Promise.reject(error)
  }
}
