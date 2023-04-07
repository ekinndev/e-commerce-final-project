import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: { type: String, required: true, minlength: 2, maxlength: 64 },
    },
    { timestamps: true },
);

userSchema.plugin(passportLocalMongoose, {
    usernameField: 'email',
});

export default mongoose.model('user', userSchema);
