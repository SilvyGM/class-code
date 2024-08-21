const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const product = new Schema({
  ref: String,
  price: Number,
  description: String,
  isavailable: Boolean,
});

module.exports = mongoose.model("Products", product);
