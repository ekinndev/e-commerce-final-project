import express, { Request, ErrorRequestHandler, Response } from 'express';
const router = express.Router();
import passport from 'passport';
import UserModel from '../models/User';
import type { RequestWithUser } from '../types';
import type { IProduct } from '../models/Product';

declare module 'express-session' {
    export interface SessionData {
        userId: { [key: string]: any };
    }
}

const sessionErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (err.status !== 401) return next(err);

    next({
        message: 'The username and password you provided did not match our records. Please double-check and try again.',
        status: 401,
    });
};

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

router.post(
    '/session',

    passport.authenticate('local', { failWithError: true }),
    async (req: RequestWithUser, res: Response) => {
        req.session.userId = req.user._id;
        req.session.save();
        res.status(200).send(req.user);
    },
    sessionErrorHandler,
);

/**
 * @swagger
 * /user/me:
 *   get:
 *     tags: [USER]
 *     description: Returns a user information with favorites!
 *     responses:
 *       200:
 *         description: Returns a user information with favorites
 */
router.get('/me', async (req, res, next) => {
    res.send(req.user);
});

router.delete('/logout', async (req, res, next) => {
    req.session.destroy(err => {
        if (err) return next(err);
        res.sendStatus(200);
    });
});

router.post('/favorites', async (req: RequestWithUser, res, next) => {
    try {
        const { productId } = req.body;
        if (req.user) {
            const user = await UserModel.findById(req.user._id);

            if (!user) return res.status(400).send({ message: 'User not found', status: 400 });

            const isFavorite = user.favorites.find((favorite: IProduct) => favorite._id.toString() === productId);

            if (isFavorite) {
                user.favorites = user.favorites.filter((favorite: IProduct) => favorite._id.toString() !== productId);
            } else {
                user.favorites.push(productId);
            }

            await user.save();

            res.sendStatus(200);
        }
    } catch (e) {
        next(e);
    }
});

router.delete('/favorites/:productId', async (req: RequestWithUser, res, next) => {
    try {
        const { productId } = req.params;
        if (req.user) {
            const user = await UserModel.findById(req.user._id);

            if (!user) return res.status(400).send({ message: 'User not found', status: 400 });

            user.favorites = user.favorites.filter((favorite: IProduct) => favorite._id.toString() !== productId);

            await user.save();

            res.sendStatus(200);
        }
    } catch (e) {
        next(e);
    }
});

export default router;
