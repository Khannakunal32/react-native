const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/awesomeRoutes");

const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.use("/", require("./routes/awesomeRoutes"));

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
