import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
    },
    rating: {
        type: Number,
    },
    comment: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const productSchema = mongoose.Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        default: 0
    },
    numReview: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0
    },
    countInStock: {
        type: Number,
        default: 0
    },
},
    {
        timestamps: true
    }
)

const Product = mongoose.model("Product", productSchema)

export default Product