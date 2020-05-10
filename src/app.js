require('express-async-errors');
const express       = require('express');
const morgan        = require('morgan');
const helmet        = require('helmet');
const bodyParser    = require('body-parser');

// mongodb
const { mongoDbConnect } = require('./database-connections/db.mongo');

// routers file
const routerHealth  = require('./module/health/health.route');
const routerStudent = require('./module/student/student.route');
const routerLecturer = require('./module/lecturer/lecturer.route');

// middle-wares
const ConfigLoaderMiddleware = require('./middlewares/config-loader');
const RouteNotFoundMiddleware = require('./middlewares/not-found');
const ExceptionHandlerMiddleware = require('./middlewares/exception-handler');


const app = express();

// Connect to multiple DB's
if (process.env.NODE_ENV !== 'test') {

    // setup connections
    mongoDbConnect('DCS');

    // queue listener
    // initiateRabbitMQ();
}

app
  .disable('x-powered-by')
  // helmet for security purpose
  .use(helmet())   
  // logger
  .use(morgan('tiny'))
  // body parser
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json({ limit: '5mb' }))
  // health API's
  .use('/', routerHealth)
  // routes after middleware validation
  .use('/', ConfigLoaderMiddleware, routerStudent)
  .use('/', ConfigLoaderMiddleware, routerLecturer)
  // RouteNotFound middle-wares must
  .use(RouteNotFoundMiddleware) 
  // ExceptionHandler will be the last one to be registered
  .use(ExceptionHandlerMiddleware); 


module.exports = app;