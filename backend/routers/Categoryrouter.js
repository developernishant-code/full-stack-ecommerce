const express = require("express")
const { createCategory, getCategory, deleteCategory, updateCategory, getbyid } = require("../controllers/Categorycontroller")
const categoryrouter = express.Router()

categoryrouter.post("/create",createCategory)
categoryrouter.get("/",getCategory)
categoryrouter.get("/:id",getbyid)
categoryrouter.delete("/delete/:id",deleteCategory)
categoryrouter.patch("/update/:id",updateCategory)

module.exports = categoryrouter