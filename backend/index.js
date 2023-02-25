const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./controllers/users')
const bookRouter = require('./controllers/books')
const loginRouter = require('./controllers/login')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT

// starts the server
const start = async () => {
    try{
        app.use(express.json());
        mongoose.set('strictQuery', false);
        await mongoose.connect(
            process.env.MONGODB_URL
        );

        app.use(express.json())
        app.use('/api/books', bookRouter)
        app.use('/api/user', userRouter)
        app.use('/api/login', loginRouter)

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start()