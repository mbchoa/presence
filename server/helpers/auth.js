import bcrypt from 'bcrypt';

const SALT_FACTOR = 10;

export function encryptPassword(password, callback) {
    bcrypt.hash(password, SALT_FACTOR)
        .then(hashedPassword => callback(null, hashedPassword))
        .catch(err => callback(err));
}

export function comparePassword(currentPassword, candidatePassword, callback) {
    bcrypt.compare(candidatePassword, currentPassword)
        .then(res => callback(null, res))
        .catch(err => callback(err));
}
