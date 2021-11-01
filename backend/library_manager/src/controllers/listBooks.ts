import { Request, Response } from "express";
import BookService from '../services/books';

class ListBooks {
    async handle(req: Request, res: Response) {
        try {
            const books = await BookService.get();

            res.status(201).json(books)
        } catch (error) {
            res.status(500).json({ message: 'Occored an erro to list books!' });
        }
    }
}

export default new ListBooks();