const express = require('express');
const Book = require('../models/bookmodels');  // Import your book model

const router = express.Router();

// Route for creating a book
router.post('/', async (req, res) => {
    try {
        const { title, author, publish_year } = req.body;
        if (!title || !author || !publish_year) {
            return res.status(400).send({
                message: 'Please send all required fields: title, author, publish_year'
            });
        }

        const newBook = {
            title: title,
            author: author,
            publish_year: publish_year
        };

        const book = await Book.create(newBook);
        return res.status(201).send(book);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
});

// Get all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
});

// Get book by id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        return res.status(200).json(book);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Update book
router.put('/:id', async (req, res) => {
    const { title, author, publish_year } = req.body;
    try {
        if (!title || !author || !publish_year) {
            return res.status(400).send({
                message: 'Please send all required fields: title, author, publish_year'
            });
        }

        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: "Book not found" });
        }
        return res.status(200).send({ message: 'Book updated successfully' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Delete book
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);  // Corrected to 'findByIdAndDelete'

        if (!result) {
            return res.status(404).json({ message: "Book not found" });
        }
        return res.status(200).send({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

module.exports = router;  // Export the router
