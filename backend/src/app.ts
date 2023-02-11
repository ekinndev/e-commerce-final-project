import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();
import exampleRoute from './routes/';

app.use('/ekin', exampleRoute);

app.get('/', async (req: Request, res: Response) => {
    await prisma.$connect();

    const test = await prisma.post.create({ data: { title: 'test' } });

    await prisma.$disconnect();
    res.send(test);
});

module.exports = app;
