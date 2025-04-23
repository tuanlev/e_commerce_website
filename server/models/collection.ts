const mongoose = require('mongoose');
const CollectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    img: {
        type: [String],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const Collection = mongoose.model('collection', CollectionSchema);
export default Collection;
