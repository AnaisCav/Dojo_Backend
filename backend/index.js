require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const port = 8000;

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);
const router = require("./src/router");
app.use(router);

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Hello you");
  }
});
