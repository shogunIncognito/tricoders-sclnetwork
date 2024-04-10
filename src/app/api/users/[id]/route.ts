import User from '@/models/User'
import { NextResponse } from 'next/server'

export async function GET (req: Request, { params }: { params: any }): Promise<NextResponse> {
  try {
    const user = await User.findById(params.id)
    if (user === null) return NextResponse.json({ message: 'User not found' }, { status: 404 })

    return NextResponse.json(user)
  } catch (error: any) {
    if (error.kind === 'ObjectId') return NextResponse.json({ message: 'User not found' }, { status: 404 })
    return NextResponse.json({ message: 'Error getting user' }, { status: 500 })
  }
}
