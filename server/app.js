const authRoutes = require("./routes/auth.routes");

app.use("/api/v1/auth", authRoutes);

module.exports = app;

const cors = require("cors");
// const corsOptions = {
//   origin: "*",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
app.use(cors(corsOptions)); // Use this after the variable declaration
