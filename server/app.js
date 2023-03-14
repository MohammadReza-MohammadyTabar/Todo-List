const connect = require("./db/connect");
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const notFound = require("./middleware/notFound");
const taskRoute = require("./routes/taskRoutes");
const logger = require("./middleware/logger");
const app = express();

app.use(express.urlencoded({ extended: false }), express.json(), cors());
app.use("/api/tasks", taskRoute);
app.use("*", notFound);
async function start() {
  const port = process.env.PORT || 3500;
  try {
    await connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`listening on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
