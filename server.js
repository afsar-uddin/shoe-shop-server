import express from "express";
import dotenv from "dotenv"
import products from "../shoe-shop-server/data/ProductItem.js"
import connectDb from "./config/mongoDb.js";

dotenv.config()
connectDb();
const app = express();


// LOAD PRODUCT FROM SERVER
app.get("/api/products", (req, res) => {
    res.json(products)
});

// LOAD SINGLE PRODUCT FROM SERVER
app.get("/api/products/:id", (req, res) => {
    const product = products.find((p => p._id === req.params.id))
    res.json(product)
});

app.get("/", (req, res) => {
    res.send("Yes, Server is running...")
});

const PORT = process.env.PORT;
app.listen(PORT, console.log("server is running!"))   