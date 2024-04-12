/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { dbConnect } from '@/db/db_config'
import Comment from '@/models/Comment'
import Post from '@/models/Post'
import User from '@/models/User'
import { NextResponse } from 'next/server'

// export async function GET (req: Request, { params }: { params: any }): Promise<NextResponse> {
//   try {
//     await dbConnect()

//     const comments = await Post.findOne({ _id: params.id }).select('id_comment').populate('id_comment')
//       .sort({ createdAt: -1 })
//     return NextResponse.json(comments)
//   } catch (error) {
//     console.log(error)
//     return NextResponse.json({
//       message: 'Error getting comments',
//       error
//     }, { status: 500 })
//   }
// }

export async function POST (req: Request, { params }: { params: any }): Promise<NextResponse> {
  try {
    await dbConnect()

    const { comment, userId } = await req.json()

    const user = await User.findOne({ _id: userId })
    if (!user) return NextResponse.json({ message: 'User not found' }, { status: 404 })

    const commentToSave = new Comment({
      content: comment,
      username: user.username,
      image: user.image,
      id_user: userId,
      id_post: params.id
    })

    const newComment = await commentToSave.save()

    const res = await Post.findOneAndUpdate(
      { _id: params.id },
      { $push: { id_comment: newComment._id } },
      { new: true }
    )

    return NextResponse.json(res)
  } catch (error: any) {
    console.log(error)
    if (error.kind === 'ObjectId') return NextResponse.json({ message: 'Post not found' }, { status: 404 })
    return NextResponse.json({ message: 'Error creating comment' }, { status: 500 })
  }
}
