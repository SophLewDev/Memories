// all routes that are to do with posts
import express from 'express'

const router = express.Router();

router.get('/', (req, res) => {     // callback once user has visited homepage
  res.send("THIS WORKS")

})

export default router;