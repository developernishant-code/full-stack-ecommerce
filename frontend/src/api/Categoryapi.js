import { axiosinstance } from "@/helper/helper"
async function getCategories(query={}) {
    const filter = new URLSearchParams()
    if(query.id) filter.append("id",query.id)
    if(query.status) filter.append("status",query.status)
    if(query.limit) filter.append("limit",query.limit)
    if(query.is_home) filter.append("is_home",query.is_home)
    if(query.is_top) filter.append("is_top",query.is_top)
    try {
        const res = await axiosinstance.get(`category?${filter.toString()}`)
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