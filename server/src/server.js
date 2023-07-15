import express from 'express'
import cors from 'cors'
import users from './utils/users.js'
import knex from 'knex'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
  res.status(200).json({
    message:'funcionando',
    users
  })
})

app.listen(5000)