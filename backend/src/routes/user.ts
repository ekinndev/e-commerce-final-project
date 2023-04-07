import express, { Request, ErrorRequestHandler, Response } from 'express';
const router = express.Router();
import passport from 'passport';
import UserModel from '../models/User';
import type { RequestWithUser } from '../types';

declare module 'express-session' {
    export interface SessionData {
        userId: { [key: string]: any };
    }
}

router.post('/register', async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const checkExistUser = await UserModel.findOne({ email });

        if (checkExistUser) return res.status(400).send({ message: 'User already exists', status: 400 });

        const createdUser = new UserModel({ name, email, password });
        const user = await UserModel.register(createdUser, password);

        req.session.userId = user._id;
        req.session.save();

        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (err.status !== 401) return next(err);

    next({
        message: 'The username and password you provided did not match our records. Please double-check and try again.',
        status: 401,
    });
};

router.post(
    '/session',

    passport.authenticate('local', { failWithError: true }),
    async (req: RequestWithUser, res: Response) => {
        req.session.userId = req.user._id;
        req.session.save();
        res.status(200).send(req.user);
    },
    errorHandler,
);

router.get('/me', async (req, res, next) => {
    res.send(req.user);
});

export default router;
