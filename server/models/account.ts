import mongoose,{ Schema } from "mongoose";

const accountSchema = new Schema({ 
    username: {
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
    role: {
        type: String,
        enum: ['admin', 'customer'],
        default: 'customer',
    },
})

const Account = mongoose.model('account', accountSchema);
export default Account;