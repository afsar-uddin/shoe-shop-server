import express from "express";
import dotenv from "dotenv"

dotenv.config()
const app = express();


app.get("/", (req, res) => {
    res.send("Yes, Server is running...")
});

const PORT = process.env.PORT;
app.listen(PORT, console.log("server is running!"))   