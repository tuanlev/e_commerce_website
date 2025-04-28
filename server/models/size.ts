import mongoose,{ Schema } from "mongoose";
import Catagory from "./catagory";

const sizeSchema =  new Schema({
    name : {
        type: String,
        required: true,
    },
    description : {
        type: String,
    },
    catagoryId: {
        type: Schema.Types.ObjectId,
        ref: 'catagory',
        required: true,}
    })
const Size = mongoose.model('size', sizeSchema);
export default Size
        /// <reference path="" />
        