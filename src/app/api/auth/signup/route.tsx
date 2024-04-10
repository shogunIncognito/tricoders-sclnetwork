import { dbConnect } from '@/db/db_config'
import { NextResponse } from 'next/server'
// import bcrypt from 'bcrypt'
import User from '@/models/User'

export async function POST (req: Request): Promise<NextResponse> {
  try {
    const { email, username, password } = await req.json()

    await dbConnect()

    const existUser = await User.findOne({ email })
    if (existUser !== null) return NextResponse.json({ message: 'User already exists' }, { status: 400 })

    const newUser = new User({
      email,
      username,
      image: 'https://i.pravatar.cc/300',
      password
      // password: await bcrypt.hash(password, 10)
    })

    newUser.save()

    return NextResponse.json({
      message: 'User created successfully'
    })
  } catch (error) {
    return NextResponse.json({
      message: 'Error creating user',
      error
    }, { status: 500 })
  }
}
