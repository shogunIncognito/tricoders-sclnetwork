import { dbConnect } from '@/db/db_config'
import User from '@/models/User'
import { NextResponse } from 'next/server'

export async function GET (req: Request): Promise<NextResponse> {
  try {
    await dbConnect()

    const url = new URL(req.url)
    const query = url.searchParams.get('q')

    if (query === null || query === '') return NextResponse.json({ message: 'Query not found' }, { status: 400 })

    const users = await User.find({ username: { $regex: query, $options: 'i' } })

    return NextResponse.json(users)
  } catch (error: any) {
    return NextResponse.json({ message: 'Error getting users' }, { status: 500 })
  }
}
