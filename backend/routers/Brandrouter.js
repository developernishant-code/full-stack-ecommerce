const express = require("express")
const fileupload = require("express-fileupload")
const { createBrand, getBrand, getBrandById, deleteBrand, updateBrand, editbrand } = require("../controllers/Brandcontroller")
const BrandRouter = express.Router()


BrandRouter.post("/create", fileupload({ createParentPath: true }), createBrand)
BrandRouter.get("/", getBrand)
BrandRouter.get("/:id", getBrandById)
BrandRouter.delete("/delete/:id", deleteBrand)
BrandRouter.patch("/update/:id", updateBrand)
BrandRouter.put("/update/:id", fileupload({ createParentPath: true }), editbrand)

module.exports = { BrandRouter }