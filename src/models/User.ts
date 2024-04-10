import { Schema, model, models } from 'mongoose'

const userSchema = new Schema({
  username: String,
  password: {
    type: String,
    select: false
  },
  email: {
    type: String,
    unique: true
  },
  image: String,
  role: {
    type: String,
    default: 'user'
  },
  description: String,
  followers: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  following: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  id_post: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  id_comment: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
}, {
  versionKey: false,
  timestamps: true
})

/* eslint-disable @typescript-eslint/strict-boolean-expressions */
export default models.User || model('User', userSchema)
