const mongoose = require("mongoose");
const connectionPah = process.env.DB_CONNECTION.replace(
  "<PASSWORD>",
  process.env.PASSWORD
);

const connect = async () => {
  try {
    await mongoose.connect(connectionPah, {
      useCreateIndex: true,
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log("Error ", error);
  }
};

module.exports = connect;
