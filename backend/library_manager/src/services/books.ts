import { PrismaClient, Book } from "@prisma/client";



export interface CreateBook {
    titulo: string;
    editora: string;
    foto?: string;
    autores?: [string];
}

export interface EditBook {
    titulo?: string;
    editora?: string;
    foto?: string;
    autores?: [string];
}

class BookService {
    prisma = new PrismaClient();

    create(body: CreateBook): Promise<Book> {
        const promise = new Promise<Book>((resolve, reject) => {
            try {
                const result = this.prisma.book.create({
                    data: body
                });

                resolve(result)
            } catch (error) {
                reject(error);
            }
        })

        return Promise.resolve(promise);
    }

    get(): Promise<Book[]> {
        const promise = new Promise<Book[]>((resolve, reject) => {
            try {
                const result = this.prisma.book.findMany();
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });

        return Promise.resolve(promise);
    }

    put(id: number, body: EditBook): Promise<Book> {
        const promise = new Promise<Book>((resolve, reject) => {
            try {
                const result = this.prisma.book.update({
                    where: { id },
                    data: body
                })

                resolve(result);
            } catch (error) {
                reject(error);
            }
        });

        return Promise.resolve(promise);
    }

    delete(id: number): Promise<Book> {
        const promise = new Promise<Book>((resolve, reject) => {
            try {
                const result = this.prisma.book.delete({
                    where: { id }
                });

                resolve(result);
            } catch (error) {
                reject(error);
            }
        })

        return Promise.resolve(promise);
    }
}

export default new BookService();