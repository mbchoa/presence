import bcrypt from 'bcrypt';
import mongoose, { Schema } from 'mongoose';

const SALT_FACTOR = 10;

const UserSchema = new Schema({
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    
}, { timestamps: true });

UserSchema.pre('save', function(next) {
    if (!this.isModified('password')) return next();

    bcrypt.hash(this.password, SALT_FACTOR)
        .then(hashedPw => {
            this.password = hashedPw;
            next();
        })
        .catch(err => next(err));
});

UserSchema.methods.comparePassword = function(inputPassword, callback) {
    bcrypt.compare(inputPassword, this.password)
        .then(res => callback(null, res))
        .catch(err => callback(err));
};

export default mongoose.model('User', UserSchema);
