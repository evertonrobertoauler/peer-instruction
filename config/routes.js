module.exports = function(app) {

  var question = require('../api/controllers/question');

  app.get('/', function(req,res){res.sendfile('../app/index.html');});
  app.get('/api/questions', question.listAll);
  app.get('/api/question/:id', question.detail);
  app.post('/api/question', question.insert);
  app.put('/api/question', question.update);
  app.delete('/api/question/:id', question.delete);
};
