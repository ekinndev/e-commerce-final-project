import express, { Request, Response, NextFunction } from 'express';
import Basket from '../models/Basket';
import { RequestWithUser } from '../types';
import type { IProduct } from '../models/Product';

const router = express.Router();

router.get('/', async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const userId = req.user._id;
    const baskets = await Basket.find({ creator: userId });

    res.send(baskets);
});

router.post('/', async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const userId = req.user._id;
    const usersBasket = await Basket.findOne({ creator: userId });

    if (usersBasket) {
        usersBasket.products.push(req.body);
        await usersBasket.save();
        return res.send(usersBasket);
    } else {
        const basket = new Basket({ creator: userId, products: [req.body] });
        await basket.save();
        return res.send(basket);
    }
});

router.delete('/:productId', async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const userId = req.user._id;
    const { productId } = req.params;

    const basket = await Basket.findOne({ creator: userId });

    if (!basket) return next({ status: 404, message: 'Basket not found' });

    basket.products = basket.products.filter((product: IProduct) => product._id.toString() !== productId);

    await basket.save();

    res.send(basket);
});

export default router;
