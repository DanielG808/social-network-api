const express = require("express");
const db = require("./config/connection");

const { Username } = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API Server is running on port ${PORT}`);
  });
});
