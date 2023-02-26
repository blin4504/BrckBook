const userRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

const saltRounds = 10

userRouter.get('/', async (req, res) => {
    const users = await User.find({}).select('-password').populate('books')
    res.json(users)
})

userRouter.post('/', async (req, res) => {
    const {first, last, email, username, password } = req.body
    const passwordHash = await bcrypt.hash(password, saltRounds)
    const newUser = new User({
        first, last, email, username, passwordHash
    })

    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
})

module.exports = userRouter