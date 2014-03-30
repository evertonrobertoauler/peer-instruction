var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'peer-instruction'
    },
    port: 3000,
    db: 'mongodb://localhost/peer-instruction-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'peer-instruction'
    },
    port: 3000,
    db: 'mongodb://localhost/peer-instruction-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'peer-instruction'
    },
    port: 3000,
    db: 'mongodb://localhost/peer-instruction-production'
  }
};

module.exports = config[env];
