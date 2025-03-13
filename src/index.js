const express = require("express");
require("dotenv").config();

const cors = require("cors");
const sequelize = require("./config/db");
const User = require("./models/user");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

(async () => {
  try {
    console.log(User);
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () =>
      console.log(`App has been started on port: ${PORT} `)
    );
  } catch (e) {
    console.log("Server error", e.message);
    process.exit(1);
  }
})();
