import { axiosinstance } from "@/helper/helper"
async function getProduct() {
  try {
    const res = await axiosinstance.get("product");
    // console.log(res)
    return res.data;
    
  } catch (err) {
    console.log(err);
    return [];
  }
}

async function GetProductById(id) {
  try {
    const res = await axiosinstance.get(`product/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}
export { getProduct, GetProductById }