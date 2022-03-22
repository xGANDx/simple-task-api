import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    name: {
        type: String
    },
    check: {
        type: Boolean,
        default: false
    },
    removed: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});

export default mongoose.model('Task', taskSchema);
