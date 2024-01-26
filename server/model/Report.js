const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let Report = new Schema({
  name: {
    type: String,
    required: true,
  },
  
  date: {
    type:Date,
  },
  
  score: {
    type:Number,
  },
  // Type: {
  //   type: String,
  // },
  // category: {
  //   type: String,
  // },
   

});

module.exports = mongoose.model("Report", Report);
