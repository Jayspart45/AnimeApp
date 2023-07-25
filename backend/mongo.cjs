const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

const url = "mongodb+srv://jay:1357945@cluster0.u2uewqx.mongodb.net/Animeapp";
console.log(url);

mongoose.connect(url);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDb Connection Error"));
db.once("open", () => {
  console.log("Connected to Mongo Successfully");
});

const UserSchema = mongoose.Schema({
  email: {
    type: "String",
    required: true,
  },
  password: {
    type: "String",
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
