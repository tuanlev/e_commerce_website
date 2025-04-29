import mongoose  from "mongoose";

const customerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    accoutID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'account',
    }
})
const Customer = mongoose.model("customer", customerSchema, "customer");
export default Customer;
