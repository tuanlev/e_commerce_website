import { Schema } from "mongoose";
const sizeGroupSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    img: {
        type: [String],
    }})
const SizeGroup = mongoose.model('sizegroup', sizeGroupSchema);
const sizeSchema =  new Schema({
    name : {
        type: String,
        required: true,
    },
    description : {
        type: String,
    },
    img : {
        type: [String]
    },
    sizeGroupId: {
        type: Schema.Types.ObjectId,
        ref: 'sizegroup',
        required: true,}
    })
const Size = mongoose.model('size', sizeSchema);
module.exports = {Size, SizeGroup};
        /// <reference path="" />
        