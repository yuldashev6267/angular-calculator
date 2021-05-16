const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const dataBase = require("./database/mongoDb");

dataBase();
const app = require("./app");
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server up on running ", port);
});
