import mongoose from 'mongoose';

const { Schema } = mongoose;

const listingSchema = new Schema(
    {
        product: { type: Schema.Types.ObjectId, ref: 'product', required: true },
        price: { type: Number, required: true, min: 0 },
    },
    { timestamps: true },
);

export default mongoose.model('listing', listingSchema);
