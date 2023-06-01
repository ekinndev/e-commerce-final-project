import express, { Request, Response, NextFunction } from 'express';
import Product from '../models/Product';
import type { RequestWithUser } from '../types';
import { Storage } from '@google-cloud/storage';
import { v4 as uuidv4 } from 'uuid';
import multer from 'multer';
import File from '../models/File';
import serviceAccountFile from './service-account.json';

const upload = multer({ dest: 'uploads/' });

const storage = new Storage({ credentials: serviceAccountFile });

const bucketName = 'resources-ecommerce';

const router = express.Router();

const ensureUser = (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return next({ status: 401, message: 'Unauthorized' });
    next();
};
/**
 * @swagger
 * /product/{productId}:
 *   get:
 *     tags: [PRODUCT]
 *     summary: Get a product by id
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns a product information
 *
 */
router.get('/:productId', ensureUser, async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const userId = req.user._id;
    const { productId } = req.params;

    const product = Product.findOne({ productId, creator: userId });

    if (!product) return next({ status: 404, message: 'Product not found' });

    res.send(product);
});
/**
 * @swagger
 * /product/:
 *   get:
 *     tags: [PRODUCT]
 *     description: Returns users all products
 *     responses:
 *       200:
 *         description: Returns a user information with favorites
 */
router.get('/', ensureUser, async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const userId = req.user._id;

    const products = await Product.find({ userId });

    return res.send(products);
});
/**
 * @swagger
 * /product/:
 *   post:
 *     tags: [PRODUCT]
 *     summary: Register an product
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the product.
 *               description:
 *                 type: string
 *                 description: Description of the product.
 *               productImage:
 *                 type: file
 *                 description: image of the product.
 *     responses:
 *       200:
 *         description: Returns products
 *
 */
router.post(
    '/',
    ensureUser,
    upload.single('productImage'),
    async (req: RequestWithUser, res: Response, next: NextFunction) => {
        const userId = req.user.id;

        const { name, description } = req.body;
        const file = req.file;

        if (!file) return next({ status: 400, message: 'No file provided' });

        const filePath = `${userId}/${uuidv4() + file.originalname}`;

        const bucketResponse = await storage.bucket(bucketName).upload(file.path, { destination: filePath });

        const fileUrl = bucketResponse[0].publicUrl();
        const fileObject = new File({ imageUrl: fileUrl, filePath, creator: userId });
        const fileMongoObject = await fileObject.save();

        const product = new Product({ name, description, image: fileMongoObject.id, creator: userId });

        await product.save();

        res.send(product);
    },
);

export default router;
