import mongoose, { Schema } from 'mongoose';
import { 
    encryptPassword,
    comparePassword,
} from '../helpers/auth';

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
    sessions: [{ 
        startTime: { type: Date },
        endTime: { type: Date },
    }],
}, { timestamps: true });

UserSchema.pre('save', function(next) {
    if (!this.isModified('password')) return next();

    encryptPassword(this.password, (err, hashedPassword) => {
        if (err) return next(err);
        this.password = hashedPassword;
        next();
    });
});

UserSchema.methods.comparePassword = function compare (inputPassword, callback) {
    comparePassword(this.password, inputPassword, (err, res) => {
        if (err) return callback(err);
        callback(null, res);
    });
};

UserSchema.methods.saveSession = function saveSession (session, callback) {
    this.sessions.push(session);

    this.save()
        .then(user => {
            callback(null, { result: 'Saved daimoku session!' });
        }, callback)
}
export default mongoose.model('User', UserSchema);
