const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./controllers/users')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log('connection successful'))
.catch(err => console.log(err))

app.use(express.json())
app.use('/api/user', userRouter)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})