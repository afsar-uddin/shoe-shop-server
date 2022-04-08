import express from "express";
import dotenv from "dotenv"
import connectDb from "./config/mongoDb.js";
import ImportData from "./DataImport.js";
import cors from 'cors'

dotenv.config()
connectDb();

const app = express();

app.use(cors())

app.use(express.json())

// app.get("/api/products", (req, res) => {
//     res.json(products)
// })


// API import
app.use("/api/import", ImportData)

app.get("/", (req, res) => {
    res.send("Yes, Server is running...")
});

const PORT = process.env.PORT;
app.listen(PORT, console.log("server is running!"))    