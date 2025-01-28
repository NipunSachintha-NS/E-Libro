const express = require("express");
const authRouter = express.Router();
const Book = require("../models/bookModel");

// Add a new book
authRouter.post("/addbook", async (req, res) => {
  try {
    const { name, title, author, description } = req.body;
    const book = new Book({ name, title, author, description });
    await book.save();
    res.status(201).json({ message: "Book added successfully!", book });
  } catch (err) {
    console.error("Error adding book:", err);
    res.status(500).json({ message: "Error adding book", error: err.message });
  }
});

// Get all books
authRouter.get("/getbooks", async (req, res) => {
  try {
    const allBooks = await Book.find();
    res.status(200).json(allBooks);
  } catch (err) {
    console.error("Error fetching books:", err);
    res.status(500).json({ message: "Error fetching books", error: err.message });
  }
});

// Update a book by ID
authRouter.patch("/book/:id", async (req, res) => {
  const { id } = req.params; // Fetch ID from params
  const updates = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book updated successfully", updatedBook });
  } catch (err) {
    console.error("Error updating book:", err);
    res.status(500).json({ message: "Error updating book", error: err.message });
  }
});

// Delete a book by ID
authRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully", deletedBook });
  } catch (err) {
    console.error("Error deleting book:", err);
    res.status(500).json({ message: "Error deleting book", error: err.message });
  }
});

// Get a book by ID
authRouter.get("/get/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (err) {
    console.error("Error fetching book:", err);
    res.status(500).json({ message: "Error fetching book", error: err.message });
  }
});

module.exports = authRouter;
