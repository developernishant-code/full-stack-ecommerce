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

// 1. CORS Setup - Wildcard / Vercel match check
server.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (
            origin === "http://localhost:3000" ||
            origin.endsWith(".vercel.app")
        ) {
            return callback(null, true);
        }
        return callback(null, true); // Fallback allow
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin']
}))

// 2. IMPORTANT: Explicitly handle browser pre-flight OPTIONS requests
server.options('*', cors())

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