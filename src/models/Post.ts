import { Schema, model, models } from 'mongoose'

const postSchema = new Schema({
  content: String,
  image: String,
  likes: {
    type: [Schema.Types.ObjectId],
    ref: 'User',
    default: []
  },
  id_user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  id_comment: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment',
    default: []
  }]
}, {
  versionKey: false,
  timestamps: true
})

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
export default models.Post || model('Post', postSchema)
