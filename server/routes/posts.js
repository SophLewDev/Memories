// all routes that are to do with posts
import express from 'express'
import { getPosts } from '../controllers/posts.js'

const router = express.Router();

router.get('/', getPosts) // router that get


export default router;