import { dbConnect } from '@/db/db_config'
import Post from '@/models/Post'
import { NextResponse } from 'next/server'

export async function GET (req: Request, { params }: { params: any }): Promise<NextResponse> {
  try {
    await dbConnect()

    const userPosts = await Post.find({ id_user: params.id }).populate(['id_user', 'id_comment']).sort({ createdAt: -1 })

    return NextResponse.json(userPosts)
  } catch (error: any) {
    if (error.kind === 'ObjectId') return NextResponse.json({ message: 'User not found' }, { status: 404 })
    return NextResponse.json({ message: 'Error getting user' }, { status: 500 })
  }
}
