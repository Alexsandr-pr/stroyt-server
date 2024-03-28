require("dotenv").config()

const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json())

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