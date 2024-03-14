const { connectionDb } = require("./Utils/database.js");
connectionDb().then(() => {
  const dotenv = require("dotenv");
  dotenv.config();
  const express = require("express");
  const cors = require("cors");
  const cookieParser = require("cookie-parser");
  const app = express();

  const { router } = require("./Routes/Routes.js");

  app.use(express.json());
  app.use(cookieParser());

  app.use(cors({ origin: true, credentials: true }));

  app.use("/", router);

  app.use("*", (req, res) => {
    res.sendStatus(404);
  });

  app.listen(process.env.PORT);
  console.log("Listening on Port " + process.env.PORT + "...");
});
