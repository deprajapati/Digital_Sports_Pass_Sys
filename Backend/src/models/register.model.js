import mongoose, { Schema } from 'mongoose';

const registerSchema = new Schema({
    fullName: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        lowercase: true,
        required: true,
    },
    sport: {
        type: String,
        required: true,
    },
      fees_paid: {
        type: String,        
        required: true,
    },
    joined_date: {
        type: Date,
       required: true,
    },
}, {
    timestamps: true,

});


export const Register = mongoose.model('Register', registerSchema);