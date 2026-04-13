import { axiosinstance } from "@/helper/helper"
async function GetBrands(query = {}) {
  const filter = new URLSearchParams()
  if (query.limit) filter.append("limit", query.limit)
  if (query.status) filter.append("status", query.status)
  if (query.is_top) filter.append("is_top", query.is_top)
  try {
    const res = await axiosinstance.get(`brand?${filter.toString()}`);
    // console.log(res)
    return res.data;

  } catch (err) {
    console.log(err);
    return [];
  }
}

async function GetBrandsById(id) {
  try {
    const res = await axiosinstance.get(`brand/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}
export { GetBrands, GetBrandsById }