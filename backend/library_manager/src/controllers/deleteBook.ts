import { Request, Response } from "express";
import BookService from '../services/books';

class CreateBook {
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const result = await BookService.delete(Number(id));

            res.status(201).json({ message: `The book "${result.titulo}" was deleted with success!` })
        } catch (error) {
            res.status(500).json({ message: 'Ocorred an erro to delete this book!' });
        }
    }
}

export default new CreateBook();