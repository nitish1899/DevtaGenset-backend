import mongoose from 'mongoose';

const querySchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: false },
        email: { type: String, required: true },
        address: { type: String, required: true },
        query: { type: String, required: true }
    },
    { timestamps: true }
);

const Query = mongoose.model('Query', querySchema);

export { Query };