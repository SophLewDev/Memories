import dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts', postRoutes) // 'posts' is starting path, postRoutes is the path

app.use(bodyParser.json({ limit: "30mb", extended: true }))         // setup bodyparser to properly send requests
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))   // setup bodyparser to properly send requests
app.use(cors())

const CONNECTION_URL = `mongodb+srv://memories:${process.env.CONNECTION_PASSWORD}@cluster0.dspkyot.mongodb.net/?retryWrites=true&w=majority`
const PORT = process.env.PORT || 5000;

console.log(process.env.PORT)
mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));