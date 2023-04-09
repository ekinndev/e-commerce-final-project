import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import MongoStore from 'connect-mongo';
import session from 'express-session';
import passport from 'passport';
import UserModel from './models/User';
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from './helpers/swagger';

dotenv.config();

import userRoutes from './routes/user';
import productRoutes from './routes/product';

if (process.env.NODE_ENV !== 'test') {
    import('./mongo-connection');
}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DATABASE_URL: string;
            NODE_ENV: 'development' | 'production' | 'test';
        }
    }
}

const app = express();

app.use(express.json());

app.use(
    session({
        store: MongoStore.create({
            mongoUrl: process.env.DATABASE_URL || 'mongodb://mongodb/test',
            stringify: false,
        }) as unknown as session.Store,
        secret: 'thisissupposedtobeasecret',
        cookie: {
            maxAge: 14 * 24 * 60 * 60 * 1000,
            sameSite: process.env.NODE_ENV === 'production' && 'none',
            secure: process.env.NODE_ENV === 'production',
        },
        resave: false,
        saveUninitialized: false,
    }),
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(UserModel.createStrategy());

passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/user', userRoutes);
app.use('/product', productRoutes);

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
