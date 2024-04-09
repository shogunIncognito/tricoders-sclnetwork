import { dbConnect } from '@/db/db_config'
import Post from '@/models/Post'
import User from '@/models/User'
import { NextResponse } from 'next/server'

export async function GET (): Promise<NextResponse> {
  try {
    await dbConnect()
    const posts = await Post.find({}).populate({ path: 'id_user', model: User }).sort({ createdAt: -1 })
    return NextResponse.json(posts)
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      message: 'Error getting posts',
      error
    }, { status: 500 })
  }
}

export async function POST (req: Request): Promise<NextResponse> {
  try {
    await dbConnect()
    const post = await req.json()

    const newPost = new Post(post)
    await newPost.save()

    return NextResponse.json(newPost)
  } catch (error) {
    return NextResponse.json({
      message: 'Error creating post',
      error
    }, { status: 500 })
  }
}
