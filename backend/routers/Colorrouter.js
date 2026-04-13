const express = require("express")
const { createcolor, getcolor, deleteColor, updateColor, getcolorById, editColor } = require("../controllers/Colorcontroller")

const ColorRouter = express.Router()


ColorRouter.post("/create", createcolor)
ColorRouter.get("/", getcolor)
ColorRouter.get("/:id", getcolorById)
ColorRouter.delete("/delete/:id", deleteColor)
ColorRouter.patch("/update/:id", updateColor)
ColorRouter.put("/update/:id", editColor)

module.exports = { ColorRouter }