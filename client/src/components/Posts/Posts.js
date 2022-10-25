import React from 'react';
import Post from './Post/Post.js';
import useStyles from './styles.js'

const classes = useStyles()
const Posts = () => {
  return (
    <div>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </div>
  )
}

export default Posts;