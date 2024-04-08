import { Schema, model, models } from 'mongoose'

const postSchema = new Schema({
  title: String,
  content: String,
  image: String,
  likes: {
    type: Number,
    default: 0
  },
  id_user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  id_comment: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
}, {
  versionKey: false,
  timestamps: true
})

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
export default models.Post || model('Post', postSchema)
