import express, { Request, Response, NextFunction } from 'express';
import Basket from '../models/Basket';
import { RequestWithUser } from '../types';
import type { IProduct } from '../models/Product';
import Listing from '../models/Listing';

const router = express.Router();
/**
 * @swagger
 * /basket/:
 *   get:
 *     tags: [BASKET]
 *     description: Returns user's basket
 *     responses:
 *       200:
 *         description: Returns users basket with items
 */
router.get('/', async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const userId = req.user._id;
    const baskets = await Basket.find({ user: userId }).populate({
        path: 'products',
        populate: {
            path: 'productId',
            model: 'product',
            populate: {
                path: 'image',
                model: 'file',
            },
        },
    });
    const basket = { ...baskets[0].toJSON() };

    for (let index = 0; index < basket.products.length; index++) {
        const product = basket.products[index];
        const listings = await Listing.find({ product: product.productId._id });
        const transformedProduct = { ...product.productId, listings };
        basket.products[index].productId = transformedProduct;
    }

    res.send(basket);
});
/**
 * @swagger
 * /basket/:
 *   post:
 *     tags: [BASKET]
 *     summary: Add product to basket
 *     responses:
 *       200:
 *         description: Adding a item to users basket
 *         content:
 *           application/json:
 *             schema:
 *                type: String
 *                example: OK
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *                 description: ObjectId of product
 *               quantity:
 *                 type: number
 *                 description: quantity of the product
 *
 */
router.post('/', async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const userId = req.user._id;
    const usersBasket = await Basket.findOne({ user: userId });

    if (usersBasket) {
        const findProduct = usersBasket.products.filter(
            (product: any) => product?.productId == req.body.productId.toString(),
        );
        if (findProduct.length > 0) {
            findProduct[0].quantity = req.body.quantity;
            await usersBasket.save();
            return res.send(usersBasket);
        }
        usersBasket.products.push(req.body);
        await usersBasket.save();
        return res.send(usersBasket);
    } else {
        const basket = new Basket({ user: userId, products: [req.body] });
        await basket.save();
        return res.send(basket);
    }
});
/**
 * @swagger
 * /basket/{productId}:
 *   delete:
 *     tags: [BASKET]
 *     summary: Remove a product from users basket
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *                type: String
 *                example: OK
 *
 */
router.delete('/:productId', async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const userId = req.user._id;
    const { productId } = req.params;

    const basket = await Basket.findOne({ user: userId });

    if (!basket) return next({ status: 404, message: 'Basket not found' });

    basket.products = basket.products.filter((product: any) => product.productId.toString() !== productId);

    await basket.save();

    res.send(basket);
});

export default router;
