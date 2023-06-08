const express = require("express");
require("dotenv").config();
const app = express();
require("./db");
require("./models/invoice");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const paymentController = require("./routes/payment.router");

app.use("/api/v1/", paymentController);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server running ..... ");
});
