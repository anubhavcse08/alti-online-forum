const mongoose = require('mongoose')
const { Schema } = mongoose;
// const Particular = require('./particularQA')

const userSchema = new Schema({
    ansTitle : String,
    ansDesc : String,
    like : {type: Number, default: 0},
    dislike : {type: Number, default: 0},
    dateSent : Date,
    lastResponse : Date,
    _question: {
        type: Schema.Types.ObjectId,
        ref:'PostQueAns'
    },
    dateSent : Date
})



const ParticularQueAns =  mongoose.model('ParticularQueAns', userSchema)
module.exports = ParticularQueAns