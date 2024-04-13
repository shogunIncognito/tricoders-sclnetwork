import { dbConnect } from '@/db/db_config'
import User from '@/models/User'
import { NextResponse } from 'next/server'

export async function POST (req: Request, { params }: { params: any }): Promise<NextResponse> {
  try {
    await dbConnect()

    const { userId } = await req.json()

    const followedUser = await User.findByIdAndUpdate({ _id: params.id }, { $pull: { followers: userId } }, { new: true })
    await User.findByIdAndUpdate({ _id: userId }, { $pull: { following: params.id } })
    if (followedUser === null) return NextResponse.json({ message: 'User not found' }, { status: 404 })

    return NextResponse.json(followedUser)
  } catch (error: any) {
    console.log(error.kind, error)
    if (error.kind === 'ObjectId') return NextResponse.json({ message: 'User not found' }, { status: 404 })
    return NextResponse.json({ message: 'Error deleting follow user' }, { status: 500 })
  }
}
