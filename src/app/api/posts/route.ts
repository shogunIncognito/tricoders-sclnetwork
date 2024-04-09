import { dbConnect } from '@/db/db_config'
import Post from '@/models/Post'
import { NextResponse } from 'next/server'

export async function GET (): Promise<NextResponse> {
  try {
    await dbConnect()
    const posts = await Post.find({})
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json({
      message: 'Error getting posts',
      error
    }, { status: 500 })
  }
}
