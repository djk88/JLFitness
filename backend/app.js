const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const pool = new Pool({
  user: "your_db_user",
  host: "localhost",
  database: "fitness_db",
  password: "your_db_password",
  port: 26257, // CockroachDB port
});

app.use(bodyParser.json());

app.post("/api/register", async (req, res) => {
  // Implement user registration logic and database insert here
});

app.post("/api/login", async (req, res) => {
  // Implement user login logic and authentication here
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
