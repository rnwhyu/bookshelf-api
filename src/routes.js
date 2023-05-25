const { addBookHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/book',
    handler: addBookHandler,
  },
];
module.exports = routes;