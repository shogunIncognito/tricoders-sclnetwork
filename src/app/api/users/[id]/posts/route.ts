import Post from '@/models/Post'
import User from '@/models/User'
import { NextResponse } from 'next/server'

export async function GET (req: Request, { params }: { params: any }): Promise<NextResponse> {
  try {
    const userPosts = await Post.find({ id_user: params.id }).populate({ path: 'id_user', model: User }).sort({ createdAt: -1 })

    return NextResponse.json(userPosts)
  } catch (error: any) {
    if (error.kind === 'ObjectId') return NextResponse.json({ message: 'User not found' }, { status: 404 })
    return NextResponse.json({ message: 'Error getting user' }, { status: 500 })
  }
}
