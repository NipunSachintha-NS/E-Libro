const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    title: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
const book = new mongoose.model("Book", bookSchema);
module.exports = book;
