const createError = require('http-errors');
const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(require('morgan')('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(require('cookie-parser')());
app.use(require('./permission/redis.permission')());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/catalog', require('./routes/catalog'));
app.use('/favorite', require('./routes/favorite'));
app.use('/personal', require('./routes/personal'));
app.use('/users', require('./routes/users'));

app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
