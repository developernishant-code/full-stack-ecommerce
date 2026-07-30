require('dotenv').config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const cookieParser = require('cookie-parser')

// Routers
const categoryrouter = require('./routers/Categoryrouter')
const { BrandRouter } = require('./routers/Brandrouter')
const { ColorRouter } = require('./routers/Colorrouter')
const { ProductRuter } = require('./routers/Productrouter')
const { Userrouter } = require('./routers/Userrouter')
const cartRouter = require('./routers/Cartrouter')
const { OrderRouter } = require('./routers/Orderrouter')

const server = express()

// Allowed Origins List
const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://full-stack-ecommerce-pivh.vercel.app"
];

// 1. Cleaned CORS Middleware (Handles pre-flight automatically)
server.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin) || origin.endsWith(".vercel.app")) {
            return callback(null, true);
        }
        
        return callback(new Error("CORS policy error: Origin not allowed"), false);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin']
}))

// 2. Parsers & Static Content
server.use(express.static("public"))
server.use(express.json())
server.use(cookieParser())

// 3. Ping Route
server.get("/ping", (req, res) => {
    res.status(200).send("Server is alive!");
});

// 4. API Routes
server.use("/category", categoryrouter)
server.use("/brand", BrandRouter)
server.use("/color", ColorRouter)
server.use("/product", ProductRuter)
server.use("/user", Userrouter)
server.use("/cart", cartRouter)
server.use("/order", OrderRouter)

// 5. Database & Server Startup
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("Database Connected Successfully");
        server.listen(PORT, () => {
            console.log(`Server Started on Port Number: ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Database connection failed:", err.message);
        process.exit(1);
    });