const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

//always require and configure near the top
require('dotenv').config();
//Connect to the database (after the dotenv)
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require('./config/checkToken'));

//Put API routes here before the catch all route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/courses', require('./routes/api/courses'));
app.use('/api/reviews', require('./routes/api/reviews'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});