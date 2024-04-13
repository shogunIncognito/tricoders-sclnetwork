import { dbConnect } from '@/db/db_config'
import User from '@/models/User'
import { NextResponse } from 'next/server'

export async function GET (req: Request, { params }: { params: any }): Promise<NextResponse> {
  try {
    await dbConnect()

    const following = await User.findOne({ _id: params.id }).populate('following').select('following')

    return NextResponse.json(following.following)
  } catch (error: any) {
    if (error.kind === 'ObjectId') return NextResponse.json({ message: 'User not found' }, { status: 404 })
    return NextResponse.json({ message: 'Error getting followings' }, { status: 500 })
  }
}

// hacer ruta para seguir a un usuario
export async function POST (req: Request, { params }: { params: any }): Promise<NextResponse> {
  try {
    await dbConnect()

    const { userId } = await req.json()

    const followedUser = await User.findByIdAndUpdate({ _id: params.id }, { $push: { followers: userId } }, { new: true })
    await User.findByIdAndUpdate({ _id: userId }, { $push: { following: params.id } })
    if (followedUser === null) return NextResponse.json({ message: 'User not found' }, { status: 404 })

    return NextResponse.json(followedUser)
  } catch (error: any) {
    console.log(error.kind, error)
    if (error.kind === 'ObjectId') return NextResponse.json({ message: 'User not found' }, { status: 404 })
    return NextResponse.json({ message: 'Error following user' }, { status: 500 })
  }
}
