var Question = require("./../models/question");

var handleReturn = function(res) {
  return function(error, result) {
    if (result && !error) 
      res.send(result);
    else {
      console.log(error);
      res.send(500, {'error': 'Something broke!'});
    }
  };
};

exports.listAll = function(req, res) {
  Question.find().select('_id title').exec(handleReturn(res));
};

exports.detail = function(req, res) {
  var id = req.params.id;
  Question.findById(id, handleReturn(res));
};

exports.insert = function(req, res) {
  var question = new Question(req.body);
  question.save(handleReturn(res));
};

exports.update = function(req, res) {
  var question = req.body;
  var id = question._id;

  delete question._id;

  Question.findByIdAndUpdate(id, question, handleReturn(res));
};

exports.delete = function(req, res) {
  var id = req.params.id;
  Question.findByIdAndRemove(id, handleReturn(res));
};
