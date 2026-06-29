const { SyncCart } = require("../controllers/Cartcontroller");
const { protect } = require("../middleware/auth")
const cartRouter = require("express").Router();
cartRouter.post("/sync", protect, SyncCart)
module.exports = cartRouter