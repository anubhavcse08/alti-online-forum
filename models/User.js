const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    googleId : String,
    userName : String,
    userFullName : String,
    userEmail : String,
    userImage : String,
    userGender : String,
    userFullImage : String
})



mongoose.model('users', userSchema)