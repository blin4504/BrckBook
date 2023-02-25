const express = require('express')
const app = express()
const { Book } = require("./book-schema");

app.use(express.json());

app.get("/books", async (req, res) => {
    const allBooks = await Book.find();
    return res.status(200).json(allBooks);
});

app.get("/books/:id", async (req, res) => {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
});

