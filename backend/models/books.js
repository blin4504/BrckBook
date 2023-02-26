const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {type: String},
  author: {type: String},
  description: {type: String},
  cover: {type: String},
  userID: {type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

bookSchema.set('toJSON', {
  transform: (doc, ret, options) => {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  }
})

const Book = mongoose.model('Book', bookSchema)
module.exports = { Book };
