var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = Schema({
  title: {
    type: String,
    required: true
  },
  answers: [{
      answer: {
        type: String,
        required: true
      },
      votes: {
        type: Number,
        default: 0,
        required: true
      }
    }],
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Question", questionSchema);