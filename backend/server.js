require('dotenv').config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const categoryrouter = require('./routers/Categoryrouter')
const server = express()
server.use(cors({origin:"http://localhost:3000"}))
server.use(express.json())
server.use("/category",categoryrouter)



mongoose.connect(process.env.DATABASE_URL).then(
    ()=>{
        console.log("Db Connected")
        server.listen(
            process.env.PORT,
            ()=>{
                console.log("Server Started")
            }
        )
    }
).catch(
    ()=>{
        console.log("Db not connected")
    }
)