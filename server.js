const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');


const app = express();

require('dotenv').config();
require('./config/database');

const usersRoutes = require('./routes/users');
const marsApiRouter = require('./routes/mars-api-routes');

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/users', usersRoutes)
app.use('/api/mars', marsApiRouter)

app.use(require('./config/auth'))




// catch all route
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Express app running on port ${port}`)
});