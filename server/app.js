const authRoutes = require('./routes/auth.routes')


app.use('/api/v1/auth', authRoutes)


module.exports = app


const cors = require("cors");
app.use(cors());