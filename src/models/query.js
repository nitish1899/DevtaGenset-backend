import mongoose from 'mongoose';

const querySchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        message: String,
    },
    { timestamps: true }
);

const Query = mongoose.model('Query', querySchema);

export { Query };