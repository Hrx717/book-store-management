import express from 'express';
import {Book} from '../models/bookStore.js'

const router = express.Router();

//Route for get all books from db
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});

        return res.status(200).json({count: books.length, data: books});
    }
    catch(error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

//Route for save a new book
router.post('/', async (req, res) => {
    try {
        const {title, author, publishYear} = req.body;
        if(!title || !author || !publishYear)
        return res.status(400).send({message: 'Send all required fields'});

        const book = await Book.create({title, author, publishYear});
        return res.status(201).json(book);
    }
    catch(error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

//Route for get one book from db by id
router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        return res.status(200).json(book);
    }
    catch(error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

//Route for update a book
router.put('/:id', async (req, res) => {
    try {
        const {title, author, publishYear} = req.body;
        if(!title || !author || !publishYear)
        return res.status(400).send({message: 'Send all required fields'});

        const {id} = req.params;
        const result = await Book.findByIdAndUpdate(id, {title, author, publishYear});

        //book not found
        if(!result)
        return res.status(404).send({message: "Book not found"});

        return res.status(200).send({message: "Book updated successfully"});
    }
    catch(error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

//Route for delete a book
router.delete('/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const result = await Book.findByIdAndDelete(id);

        //book not found
        if(!result)
        return res.status(404).send({message: "Book not found"});

        return res.status(200).send({message: "Book deleted successfully"});
    }
    catch(error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

export default router;