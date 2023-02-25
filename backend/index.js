const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3001

// starts the server
const start = async () => {
    try{
        app.use(express.json());
        mongoose.set('strictQuery', false);
        await mongoose.connect(
            'mongodb+srv://aw2755:brickhack9@cluster0.rhh3sru.mongodb.net/?retryWrites=true&w=majority'
        );
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();

