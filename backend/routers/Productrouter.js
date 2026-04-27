const express = require("express")
const fileupload = require("express-fileupload")
const { createproduct, getProduct, getProductById, deleteProduct, updateProduct, editproduct } = require("../controllers/productcontroller.js")
const ProductRuter = express.Router()
const { protect, authorize } = require("../middleware/auth")


ProductRuter.post("/create",protect, authorize("admin", "superadmin"), fileupload({ createParentPath: true }), createproduct)
ProductRuter.get("/", getProduct)
ProductRuter.get("/:id", getProductById)
ProductRuter.delete("/delete/:id",protect, authorize("admin", "superadmin"), deleteProduct)
ProductRuter.patch("/update/:id", protect, authorize("admin", "superadmin"),updateProduct)
ProductRuter.put("/update/:id",protect, authorize("admin", "superadmin"), fileupload({ createParentPath: true }), editproduct)

module.exports = { ProductRuter }