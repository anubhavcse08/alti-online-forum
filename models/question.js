const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = Schema({
    // _id: Schema.Types.ObjectId,
    QAHeading: String,
    QADescription : String,
    like : {type: Number, default: 0},
    dislike : {type: Number, default: 0},
    dateSent : Date,
    lastResponse : Date,
    ans : [{
        type:Schema.Types.ObjectId,
        ref: 'Answer'
    }]
});




const Question = mongoose.model('Question', questionSchema);
module.exports = Question