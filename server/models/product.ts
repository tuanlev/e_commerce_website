import { Schema } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    details: {
        colorId: {
            type: Schema.Types.ObjectId,
            ref: 'color',
            required: true,
        },
        sizeId: {
            type: Schema.Types.ObjectId,
            ref: 'size',
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        discount: {
            type: Number,
            default: 0,
        },
        stock: {
            type: Number,
            required: true,
        },
        img: {
            type: [String],
            required: true,
        },
        materialId: {
            type: Schema.Types.ObjectId,
            ref: 'material',
            required: true,
        },

    },
    CollectionId: {
        type: Schema.Types.ObjectId,
        ref: 'collection',
        required: true,
    },
    catagoryId: {
        type: Schema.Types.ObjectId,
        ref: 'catagory',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
})