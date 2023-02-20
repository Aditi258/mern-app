//const mongoose = require("../database");

const mongoose = require("mongoose");

var imagepostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

//Image is a model which has a schema imageSchema

module.exports = new mongoose.model("ImagePost", imagepostSchema);
