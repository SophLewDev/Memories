// all routes that are to do with posts
import express from 'express'
import { getPosts, createPosts } from '../controllers/posts.js'

const router = express.Router();

router.get('/', getPosts) // router that get
router.post('/', createPosts)


export default router;