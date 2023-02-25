const express = require('express')
const app = express.Router()
const { Book } = require("../models/books");

app.get("/", async (req, res) => {
    const allBooks = await Book.find();
    return res.status(200).json(allBooks);
});

app.get("/:id", async (req, res) => {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
});

module.exports = app

