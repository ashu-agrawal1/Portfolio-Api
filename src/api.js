const dotenv = require("dotenv")
dotenv.config();
const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const app = express();
const serverless = require("serverless-http")
const { router } = require("../Routes/Routes.js")

app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: true, credentials: true }));

app.use('/', router);


app.use('/.netlify/functions/api',router);

// app.listen(process.env.PORT);
// console.log('Listening on Port ' + process.env.PORT + '...');
module.exports.handler = serverless(app)
