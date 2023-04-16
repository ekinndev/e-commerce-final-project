import mongoose from 'mongoose';

const { Schema } = mongoose;

const basketProductItem = new Schema({
    productId: { type: Schema.Types.ObjectId, ref: 'product', required: true },
    quantity: { type: Number, required: true, min: 1 },
});

const basketSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'user', required: true },
        products: [basketProductItem],
    },
    { timestamps: true },
);

export default mongoose.model('basket', basketSchema);
