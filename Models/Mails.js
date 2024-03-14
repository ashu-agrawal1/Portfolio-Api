const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mailSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: false,
  },
  clientIp: {
    type: String,
    required: false,
  },
});

const Mail = mongoose.model("Mails", mailSchema);
module.exports = { Mail };
