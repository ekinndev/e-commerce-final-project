import mongoose from 'mongoose';

const { Schema } = mongoose;

const fileSchema = new Schema(
    {
        filePath: { type: String, required: true },
        imageUrl: { type: String, required: true },
        creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    },
    { timestamps: true },
);

fileSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.filePath;
    delete obj.creator;
    return obj;
};

export default mongoose.model('file', fileSchema);
