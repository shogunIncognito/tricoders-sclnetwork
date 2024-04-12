import { Schema, model, models } from 'mongoose'

const commentSchema = new Schema({
  content: String,
  likes: {
    type: Number,
    default: 0
  },
  username: String,
  image: String,
  id_user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  id_post: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }
}, {
  versionKey: false,
  timestamps: true
})

/* eslint-disable @typescript-eslint/strict-boolean-expressions */
export default models.Comment || model('Comment', commentSchema)
