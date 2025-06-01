import mongoose, { Schema } from 'mongoose';
const loginSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
export const Login = mongoose.model('Login', loginSchema);