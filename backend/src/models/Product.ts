import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema(
    {
        name: { type: String, required: true, minlength: 2, maxlength: 64 },
        description: { type: String, required: true, minlength: 2, maxlength: 300 },
        creator: { type: Schema.Types.ObjectId, ref: 'user', required: true, autopopulate: true },
        image: { type: Schema.Types.ObjectId, ref: 'file', required: true, autopopulate: true },
    },
    { timestamps: true },
);

export interface IProduct extends mongoose.Document {
    name: string;
    description: string;
    creator: mongoose.Types.ObjectId;
    image: mongoose.Types.ObjectId;
}

export default mongoose.model('product', productSchema);
