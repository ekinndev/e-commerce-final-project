import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: { type: String, required: true, minlength: 2, maxlength: 64 },
        role: { type: String, required: true, enum: ['user', 'admin'], default: 'user' },
        favorites: [{ type: Schema.Types.ObjectId, ref: 'product' }],
    },
    { timestamps: true },
);

userSchema.plugin(passportLocalMongoose, {
    usernameField: 'email',
});

export default mongoose.model('user', userSchema);
