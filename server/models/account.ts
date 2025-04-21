import { Schema } from "mongoose";

const accountSchema = new Schema({ 
    userName: {
        type: String,
        required: true,
        validate: {
            validator: function (v: string) {
                return /^[a-zA-Z0-9]+$/.test(v);
            },
            message: (props: { value: string }) => `${props.value} is not a valid username!`,
        },
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v: string) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: (props: { value: string }) => `${props.value} is not a valid email!`,
        },
    },  
    phoneNumber: {
        type: String,
        required: true,
        validate: {
            validator: function (v: string) {
                return /^\d{10}$/.test(v);
            },
            message: (props: { value: string }) => `${props.value} is not a valid phone number!`,
        },
    },
    role: {
        type: String,
        enum: ['admin', 'customer'],
        default: 'customer',
    },
})

const Account = mongoose.model('account', accountSchema);
export default Account;