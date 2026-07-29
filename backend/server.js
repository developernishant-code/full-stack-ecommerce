require('dotenv').config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const categoryrouter = require('./routers/Categoryrouter')
const { BrandRouter } = require('./routers/Brandrouter')
const cookieParser = require('cookie-parser')
const { ColorRouter } = require('./routers/Colorrouter')
const { ProductRuter } = require('./routers/Productrouter')
const { Userrouter } = require('./routers/Userrouter')
const cartRouter = require('./routers/Cartrouter')
const { OrderRouter } = require('./routers/Orderrouter')

const server = express()

// Dynamic allowed origins for Localhost and Vercel Deployment
const allowedOrigins = [
    "http://localhost:3000",
    "https://full-stack-ecommerce-pivh.vercel.app"
];

server.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like Mobile apps, Postman, or Server-to-Server requests)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("CORS Blocked for this origin"));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

server.use(express.static("public"))
server.use(express.json())
server.use(cookieParser())

server.use("/category", categoryrouter)
server.use("/brand", BrandRouter)
server.use("/color", ColorRouter)
server.use("/product", ProductRuter)
server.use("/user", Userrouter)
server.use("/cart", cartRouter)
server.use("/order", OrderRouter)

mongoose.connect(process.env.DATABASE_URL).then(
    () => {
        console.log("Database Connected Successfully")
        server.listen(
            process.env.PORT,
            () => {
                console.log("Server Started on Port Number :", process.env.PORT)
            }
        )
    }
).catch(
    (err) => {
        console.log("Db not connected:", err)
    }
)