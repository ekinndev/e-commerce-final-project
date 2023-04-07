import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

import userRoutes from './routes/user';

if (process.env.NODE_ENV !== 'test') {
    import('./mongo-connection');
}

const app = express();

app.use(express.json());

app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send({ message: 'Welcome to the API', status: 200 });
});

app.use('*', (req, res) => {
    res.status(404).send({ message: 'Invalid Route', status: 404 });
});

app.use((err: { status: number }, req: Request, res: Response, next: NextFunction) => {
    let status = err.status || 500;

    res.status(status).send(err);
});

module.exports = app;
