const express = require("express");
const authRouter = express.Router();
const Book = require("../models/bookModel");

authRouter.post("/addbook", async (req, res) => {
  try {
    const { name, title, author, description } = req.body;
    const book = new Book({
      name,
      title,
      author,
      description,
    });
    await book.save();
    res.status(201).send("Book added successfully!");
  } catch (err) {
    console.error("error occur");
  }
});

authRouter.get("/getbooks", async (req, res) => {
  try {
    const allBooks = await Book.find();
    res.send(allBooks);
  } catch (err) {
    console.error("error occur");
  }
});

authRouter.patch("/update", async (req, res) => {
  const { id } = req.body;

  await Book.findByIdAndUpdate(id, req.body);
  res.send("user update successfully");
});

authRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await Book.findByIdAndDelete(id);
  res.send("user delete sucussfully");
});

module.exports = authRouter;
