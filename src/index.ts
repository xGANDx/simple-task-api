import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json())
app.use(cors())

import task from './domains/task/controller';

mongoose.connect('mongodb+srv://api:ZzuzSM60ub0LkH9W@simple-task.obgny.mongodb.net/simple-task');

app.use('/task', task);

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Run -> ${port}`)
})