const express = require("express")
const { createCategory, getCategory, deleteCategory, updateCategory, getbyid,updateCategoryById } = require("../controllers/Categorycontroller")
const categoryrouter = express.Router()
const fileUpload = require("express-fileupload")


categoryrouter.post("/create",fileUpload({createParentPath:true}),createCategory)
categoryrouter.get("/",getCategory)
categoryrouter.get("/:id",getbyid)
categoryrouter.delete("/delete/:id",deleteCategory)
categoryrouter.patch("/update/:id",updateCategory)
categoryrouter.put("/update/:id",fileUpload({createParentPath:true}),updateCategoryById)

module.exports = categoryrouter