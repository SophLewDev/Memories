import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

require('dotenv').config()

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}))         // setup bodyparser to properly send requests
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))   // setup bodyparser to properly send requests
app.use(cors())

const CONNECTION_URL = `mongodb+srv://memories:${process.env.CONNECTION_PASSWORD}@cluster0.dspkyot.mongodb.net/?retryWrites=true&w=majority`
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app,listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false)