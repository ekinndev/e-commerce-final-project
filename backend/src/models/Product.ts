import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema(
    {
        name: { type: String, required: true, minlength: 2, maxlength: 64 },
        description: { type: String, required: true, minlength: 2, maxlength: 300 },
        creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        image: { type: Schema.Types.ObjectId, ref: 'File', required: true },
    },
    { timestamps: true },
);

export default mongoose.model('product', productSchema);
