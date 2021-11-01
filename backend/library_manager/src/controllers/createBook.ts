import { Request, Response } from "express";
import BookService from '../services/books';

class CreateBook {
    async handle(req: Request, res: Response) {
        try {
            const bookCreated = await BookService.create(req.body);

            res.status(201).json(bookCreated)
        } catch (error) {
            res.status(500).json({ message: 'Occored an error to create this book!' });
        }
    }
}

export default new CreateBook();