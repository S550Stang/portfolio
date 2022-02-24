require("dotenv").config();
const pg = require("pg");

const connectionString = `postgresql://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DB_NAME}?sslmode=disable`;
const client = new pg.Client({
  connectionString: connectionString || "",
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
});
client
  .connect()
  .then(() => console.log("connected"))
  .catch((err) => console.error("connection error", err.stack));

module.exports = client;
