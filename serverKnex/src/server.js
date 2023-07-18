import express from 'express'
import cors from 'cors'
import asyncHandler from 'express-async-handler'
import knexfile from './config/knexfile.js'
import { writeToFile } from './utils/files.js'

const app = express();

app.use(express.json());
app.use(cors());

console.log('rodando server');

app.get('/', asyncHandler(async (req, res) => {
  try {
    const users = await knexfile('users').select();
    writeToFile(users[0]?.username);
    res.status(200).json({
      message: 'funcionando',
      envs: process.env,
      users
    });
  } catch (error) {
    writeToFile(error);
    res.status(404).json({
      error: error.message
    });
  }
}));

app.listen(5000);