const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const sale = new Schema({
  quantity: {
    type: Number,
    min: 1,
    max: 100,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Products",
  },
  total: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Sales", sale);
