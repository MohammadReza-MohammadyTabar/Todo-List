const connect = require("./db/connect");
const express = require("express");
require("dotenv").config();

async function start() {
  const port = process.env.PORT || 3000;
  const app = express();
  try {
    app.listen(port, () => {
      console.log(`listening on port: ${port}`);
    });
    await connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
}
start();
