import mongoose, { Schema } from "mongoose";

const catagorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    }
    
})
const Catagory = mongoose.model('catagory', catagorySchema);
export default Catagory;