const mongoose = require('mongoose')

const UserMannual = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required : true
    },
    userName: {
        type: String,
        required : true
    },
    password: {
        type: String,
        required : true
    },
    userEmail: {
        type: String,
        required : true,
        createIndexes: {unique : false}
    }
    
})

module.exports = mongoose.model('mannual_users', UserMannual);