require("dotenv").config()

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/index")
const corsMiddleware = require("./middleware/cors.middleware")

app.use(corsMiddleware)
app.use(express.json())
app.use("/api", router)

const PORT = process.env.PORT;


const start = async () => {

    try{
        await mongoose.connect(process.env.DB_URL)
        
        app.listen(PORT, () => {
            console.log("Server has been started on port:", PORT)
        })
        
    } catch(e) {
        
    }
}

start()