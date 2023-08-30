const mysql2 = require("mysql2/promise");
require("dotenv").config();

const { DB_PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql2.createPool({
  port: DB_PORT,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

pool
  .getConnection()
  .then(() => console.info("Database wired ⚡"))
  .catch(() => {
    console.warn(
      "Warning:",
      "Failed to get a DB connection.",
      "Did you create a .env file with valid credentials?",
      "Routes using models won't work as intended"
    );
  });

const models = {};

const PostManager = require("./PostManager");

models.post = new PostManager();
models.post.setDatabase(pool);

module.exports = models;
