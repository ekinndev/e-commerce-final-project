import express from 'express';
import Listing from '../models/Listing';

const router = express.Router();

/**
 * @swagger
 * /listings/:
 *   post:
 *     tags: [Listings]
 *     summary: Create Listings
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product:
 *                 type: string
 *                 description: ObjectId of product
 *               price:
 *                 type: number
 *                 description: price of the product
 *
 *     responses:
 *       200:
 *         description: Create listings
 *         content:
 *           application/json:
 *             schema:
 *                type: String
 *                example: OK
 *
 */
router.post('/', async (req, res, next) => {
    const data: { product: string; quantity: number; price: number } = req.body;
    await Listing.create(data);
    res.send('OK');
});

export default router;
