import { Router } from 'express';

import ListBooks from './controllers/listBooks';
import CreateBook from './controllers/createBook';
import EditBook from './controllers/editBook';
import DeleteBook from './controllers/deleteBook';

const router = Router();

router.get('/obras', ListBooks.handle)
router.post('/obras', CreateBook.handle);
router.put('/obras/:id', EditBook.handle);
router.delete('/obras/:id', DeleteBook.handle);

export default router;