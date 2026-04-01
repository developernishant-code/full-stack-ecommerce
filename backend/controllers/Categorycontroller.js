const categorymodel = require("../models/Categorymodel")

const createCategory = async (req, res) => {
    try {
        const name = req.body.name;
        const slug = req.body.slug;

        if (!name || !slug) {
            res.status(400).json({
                message: "All Fields are required",
                success: false
            })
        }
        const iscategoryexist = await categorymodel.findOne({ name })
        if (iscategoryexist) {
            return res.status(409).json({
                message: "Category Already Exist",
                success: false
            })
        }

        await categorymodel.create({ name, slug });

        res.status(201).json({
            message: "Data Created Successfully",
            success: true

        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};

const getCategory = async (req, res) => {
    try {
        const allcategories = await categorymodel.find()
        res.status(200).json({
            message: "Data found Successfully",
            success: true,
            allcategories
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}

const getbyid = async(req,res)=>{
    try {
        const id = req.params.id
        const allcategories = await categorymodel.findById(id)
        res.status(200).json({
            message: "Data found Successfully",
            success: true,
            allcategories
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}

const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id
        const iscategoryexist = await categorymodel.findById(id)
        if (!iscategoryexist) {
            return res.status(404).json({
                message: "Category Not found",
                success: false
            })
        }

        await categorymodel.deleteOne({ _id: id })
        return res.status(201).json({
            message: "Data deleted Successfully",
            success: true
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}

const updateCategory = async (req, res) => {
    try {
        const id = req.params.id
        const { field } = req.body
        const iscategoryexist = await categorymodel.findById(id)
        if (!iscategoryexist) {
            return res.status(404).json({
                message: "Category Not found",
                success: false
            })
        }
        const allowfields = ["status", "is_home", "is_top", "is_best", "is_popular"]
        if (!allowfields.includes(field)) {
            res.status(500).json({
                message: "Bad Request",
                success: false
            })
        }
        await categorymodel.findByIdAndUpdate(
            id,
            { [field]: !iscategoryexist[field] }
        )

        return res.status(201).json({
            message: "Data updated Successfully",
            success: true
        })


    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}

module.exports = { createCategory, getCategory, deleteCategory, updateCategory, getbyid }