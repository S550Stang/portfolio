// load .env data into process.env
require("dotenv").config();
// other dependencies
const fs = require("fs");
const pg = require("pg");
// PG connection setup
const connectionString = `postgresql://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DB_NAME}?sslmode=disable`;
const client = new pg.Client({
  connectionString: connectionString || "",
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
});
client
  .connect()
  .then(() => console.log("connected"))
  .catch((err) => console.error("connection error", err.stack));

const runSchemaFiles = function () {
  const schemaFilenames = fs.readdirSync("./db/schema");
  for (const fn of schemaFilenames) {
    const sql = fs.readFileSync(`./db/schema/${fn}`, "utf8");
    client
      .query(sql)
      .then(() => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
const runSeedFiles = function () {
  const schemaFilenames = fs.readdirSync("./db/seeds");
  for (const fn of schemaFilenames) {
    const sql = fs.readFileSync(`./db/seeds/${fn}`, "utf8");
    client.query(sql);
  }
};

runSchemaFiles();
runSeedFiles();
