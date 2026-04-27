const express = require("express")
const { createCategory, getCategory, deleteCategory, updateCategory, getbyid, updateCategoryById } = require("../controllers/Categorycontroller")
const categoryrouter = express.Router()
const fileUpload = require("express-fileupload")
const { protect, authorize } = require("../middleware/auth")


categoryrouter.post("/create", protect, authorize("admin", "superadmin"), fileUpload({ createParentPath: true }), createCategory)
categoryrouter.get("/", getCategory)
categoryrouter.get("/:id", getbyid)
categoryrouter.delete("/delete/:id", protect, authorize("admin", "superadmin"), deleteCategory)
categoryrouter.patch("/update/:id", protect, authorize("admin", "superadmin"), updateCategory)
categoryrouter.put("/update/:id", protect, authorize("admin", "superadmin"), fileUpload({ createParentPath: true }), updateCategoryById)

module.exports = categoryrouter