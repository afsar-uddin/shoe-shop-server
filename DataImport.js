import express from "express"
import products from "./data/ProductItem.js"
import users from "./data/users.js"
import Product from "./Models/productModel.js"
import User from "./Models/UserModel.js"

const ImportData = express.Router()

ImportData.post("/user", async (req, res) => {
    await User.deleteMany({})
    const importUser = await User.insertMany(users)
    res.send({ importUser })
})

ImportData.post("/products", async (req, res) => {
    await Product.deleteMany({})
    const importProduct = await Product.insertMany(products)
    res.send({ importProduct })
})

export default ImportData