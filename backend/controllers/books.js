const express = require('express')
const app = express.Router()
const { Book } = require("../models/books");
const jwt = require('jsonwebtoken')
const axios = require('axios')
const User = require('../models/user')

app.get("/", async (req, res) => {
    const allBooks = await Book.find()
    return res.status(200).json(allBooks);
});

app.get("/:id", async (req, res) => {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
});

const getToken = (req) => {
    return req.headers.authorization?.split(` `)[1];
}

app.post("/:title", async (req, res) => {
    const title = req.params
    const token = getToken(req)
    const userData = await jwt.verify(token, process.env.SECRET)
    const {username, id } = userData
    const user = await User.findOne({ username })
    
    const data = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title.title}`)
    const book = new Book({
        title: data.data.items[0].volumeInfo.title,
        author: data.data.items[0].volumeInfo.authors[0],
        description: data.data.items[0].volumeInfo.description,
        cover: data.data.items[0].volumeInfo.imageLinks.thumbnail,
        userID: id
    })

    console.log(book.id)

    user.books.push(book.id)
    user.save()
    book.save()
});

module.exports = app

