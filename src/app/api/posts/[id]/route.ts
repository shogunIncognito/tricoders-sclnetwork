/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { dbConnect } from '@/db/db_config'
import Post from '@/models/Post'
import { NextResponse } from 'next/server'

export async function POST (req: Request, { params }: { params: any }): Promise<NextResponse> {
  try {
    await dbConnect()
    const { userId } = await req.json()

    const post = await Post.findOne({ _id: params.id })
    if (post === null) return NextResponse.json({ message: 'Post not found' }, { status: 404 })

    if (post.likes.includes(userId)) {
      post.likes = post.likes.filter((id: string) => id.toString() !== userId)
    } else {
      post.likes.push(userId)
    }

    await post.save()

    return NextResponse.json(post)
  } catch (error: any) {
    console.log(error)
    if (error.kind === 'ObjectId') return NextResponse.json({ message: 'Post not found' }, { status: 404 })
    return NextResponse.json({ message: 'Error loving post' }, { status: 500 })
  }
}

export async function DELETE (req: Request, { params }: { params: any }): Promise<NextResponse> {
  try {
    await dbConnect()

    await Post.findByIdAndDelete(params.id)

    return NextResponse.json({ message: 'Post deleted' })
  } catch (error: any) {
    console.log(error)
    if (error.kind === 'ObjectId') return NextResponse.json({ message: 'Post not found' }, { status: 404 })
    return NextResponse.json({ message: 'Error deleting post' }, { status: 500 })
  }
}
