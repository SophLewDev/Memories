import PostMessage from '../models/postMessage.js'  // gives access to our post model

// all the handlers for our routes
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find() // takes time to get the data from model
    console.log(postMessages)
    res.status(200).json(postMessages) // returns this
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createPosts = async (req,res) => {
  const post = req.body // post requests give us access to req.body
  const newPost = new PostMessage(post)
  try {
    await newPost.save() // async action
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}