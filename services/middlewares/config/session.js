const sessions = require('express-session')
const config = require('./auth')

module.exports = sessions({
    secret: config.secret,
    saveUninitialized: true,
    cookie: {maxAge: 120000},
    resave: false
})