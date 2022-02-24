const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080 || 5000;

app.use(cors());

app.listen(PORT, (req, res) => {
  console.log(`The server is up and running and is listening on PORT:${PORT}`);
});
