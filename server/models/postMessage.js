import mongoose from 'mongoose'

// creating mongoose schema, define its properties
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
})
// now we have a schema, we have to turn it into a model

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage