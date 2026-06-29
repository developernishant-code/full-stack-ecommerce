const express = require("express")
const { createorder,paymentVerify} = require("../controllers/ordercontroller")
const {protect} = require("../middleware/auth")

const OrderRouter = express.Router()
OrderRouter.post("/place",protect, createorder)
OrderRouter.post("/verify",protect, paymentVerify)
module.exports = { OrderRouter }