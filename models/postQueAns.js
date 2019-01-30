const mongoose = require('mongoose')
const { Schema } = mongoose;
// const PostQA_QueDes = require('./postQA_QueDes');

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    QAHeading : String,
    QADescription : String,
    like : {type: Number, default: 0},
    dislike : {type: Number, default: 0},
    dateSent : Date,
    lastResponse : Date,
    ans : [{
        type:Schema.Types.ObjectId,
        ref: 'ParticularQueAns'
    }]
})

const PostQueAns = mongoose.model('PostQueAns', userSchema)
module.exports = PostQueAns;