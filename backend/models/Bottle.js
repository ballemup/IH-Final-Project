const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bottleSchema = new Schema({
  Name: String,
  Categories:String,
  Image_url: String,
  Price: Number,
  Description:String});


const Bottle = mongoose.model("Bottle", bottleSchema);
module.exports = Bottle;