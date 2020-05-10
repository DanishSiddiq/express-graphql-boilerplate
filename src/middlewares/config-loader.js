const ApiProblem = require('express-api-problem');
const HttpStatus = require('http-status-codes');

/**
 * for authorization layer
 * @param req
 * @param res
 * @param next
 * @constructor
 */
const ConfigLoaderMiddleware = (req, res, next) => {

  // just an example to set key in the response header
  res.header({
    'x-connection-id': 'abcdefghijklmnopqrstuvwxzy'
  });

  const apiKey = req.get('x-api-key');

  // If key is provided then check for its configuration
  if (apiKey && apiKey === 'test-authorization-key') {
    throw new ApiProblem(HttpStatus.FORBIDDEN, 'Unauthorized', 'Invalid apiKey received');
  }

  next();
};

module.exports = ConfigLoaderMiddleware;
