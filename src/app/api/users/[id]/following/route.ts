import { dbConnect } from '@/db/db_config'
import User from '@/models/User'
import { NextResponse } from 'next/server'

export async function GET (req: Request, { params }: { params: any }): Promise<NextResponse> {
  try {
    await dbConnect()

    const following = await User.findOne({ _id: params.id }).populate('following').select('following')

    return NextResponse.json(following.following)
  } catch (error: any) {
    console.log(error)
    if (error.kind === 'ObjectId') return NextResponse.json({ message: 'User not found' }, { status: 404 })
    return NextResponse.json({ message: 'Error getting followings' }, { status: 500 })
  }
}

// hacer ruta para seguir a un usuario
