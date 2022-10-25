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

export const createPosts = (req,res) => {
  res.send("Post Creation")
}