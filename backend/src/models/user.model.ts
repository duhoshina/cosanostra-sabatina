import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    curso: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password_hash: {
        type: String,
        required: true
    }
}, { timestamps: {createdAt: true}});

export const UserModel = mongoose.model('User', userSchema);