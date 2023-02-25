const express = require('express')
const app = express.Router()
const { Book } = require("../models/books");
const jwt = require('jsonwebtoken')
const axios = require('axios')

app.get("/", async (req, res) => {
    const allBooks = await Book.find();
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
    console.log(title)
    const token = getToken(req)
    const userData = await jwt.verify(token, process.env.SECRET)
    const user = User.findOne({ 'username': userData.username })
    
    const data = axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}`)
    const book = new Book({
        title: data.items.volumeInfo.title,
        author: data.items.volumeInfo.authors[0],
        description: data.items.volumeInfo.description,
        cover: data.items.volumeInfo.imageLinks.thumbnail,
        userID: user._id
    })

    book.save()
    user.books.concat(book._id)
    res.send(book)
});

module.exports = app

