const authRoutes = require('./routes/auth.routes')


app.use('/api/v1/auth', authRoutes)


module.exports = app
