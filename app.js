const express = require("express");
const historyRouter = require("./routes/historyRouter");
const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);

  res.header("Access-Control-Allow-Origin", req.headers.origin);

  res.header("Access-Control-Allow-Methods", "OPTIONS,GET,PUT,POST,DELETE");

  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,authorization"
  );

  next();
});
app.use(express.json());
app.use("/api", historyRouter);
module.exports = app;
