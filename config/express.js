var express = require('express');

module.exports = function(app, config) {
  app.configure(function() {
    app.use(express.compress());
    app.use(express.static(config.root + '/app'));
    app.set('port', config.port);
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
  });
};
