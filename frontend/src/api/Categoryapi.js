import { axiosinstance } from "@/helper/helper"
async function getCategories() {
    try {
        const res = await axiosinstance.get("category")
        return res.data
    } catch (err) {
        console.log(err)
    }
}

async function getCategoryById(id) {
    try {
        const res = await axiosinstance.get(`category/${id}`)
        return res.data
    } catch (err) {
        console.log(err)
    }
}

export { getCategories,getCategoryById } 