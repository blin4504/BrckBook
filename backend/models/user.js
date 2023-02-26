const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    email: String,
    username: String,
    password: String,
    books: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Book'
    }]
})

userSchema.set('toJSON', {
    transform: (doc, ret, options) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User