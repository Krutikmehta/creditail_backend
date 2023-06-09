const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(`Could not connect to db ` + err);
  });
