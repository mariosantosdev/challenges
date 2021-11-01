import { Request, Response } from "express";
import BookService from '../services/books';

class EditBook {
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const bookUpdated = await BookService.put(Number(id), req.body);

            res.status(201).json(bookUpdated)
        } catch (error) {
            res.status(500).json({ message: 'Ocorred an error to edit this book!' });
        }
    }
}

export default new EditBook();