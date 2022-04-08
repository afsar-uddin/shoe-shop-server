import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems: [
        {
            name: { type: String },
            qty: { type: Number },
            image: { type: String },
            price: { type: Number },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            }
        }
    ],
    shippingAddress: {
        address: { type: String },
        city: { type: String },
        postalCode: { type: String },
        country: { type: String }
    },
    paymentMethod: {
        type: String,
        default: "Paypal"
    },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String },
    },
    taxPrice: {
        type: Number,
        default: 0.0
    },
    shippingPriece: {
        type: Number,
        default: 0.0
    },
    totalPriece: {
        type: Number,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        default: false
    },
    paidAt: {
        type: Date,
    },
    isDelivered: {
        type: Boolean,
        default: false
    },
    deliverAt: {
        type: Date,
    },
},
    {
        timestamps: true
    }
)

const Order = mongoose.model("Order", orderSchema)

export default Order