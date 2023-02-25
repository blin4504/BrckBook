const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3001

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://aw2755:brickhack9@cluster0.rhh3sru.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('connection successful'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})