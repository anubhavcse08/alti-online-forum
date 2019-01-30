const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const answerSchema = Schema({
    que: { type: Schema.Types.ObjectId, ref: 'Question' },
    ansTitle : String,
    ansDesc : String,
    like : {type: Number, default: 0},
    dislike : {type: Number, default: 0},
    dateSent : Date,
  //   fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
  });

  const Answer = mongoose.model('Answer', answerSchema);
  module.exports = Answer