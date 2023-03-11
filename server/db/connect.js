const mongoose = require("mongoose");
async function connect(uri) {
  try {
    await mongoose
      .connect(uri)
      .then(() => {
        console.log("connected");
      })
      .catch((error) => {
        throw error;
      });
  } catch (error) {
    console.log(error);
  }
}
module.exports = connect;
