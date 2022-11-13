const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    phone: Number,
    email: {
        type: String,
        unique: true
    }
})

const user = mongoose.model('User', userSchema)

module.exports = user