import { axiosinstance } from "@/helper/helper"
import { cookies } from "next/headers"   // ← add this

const getMe = async () => {
    try {
        const cookieStore = await cookies()
        const allCookies = cookieStore.getAll()
            .map(c => `${c.name}=${c.value}`)
            .join('; ')

        const response = await axiosinstance.get("user/get", {
            headers: {
                Cookie: allCookies   // ← manually forward cookies
            }
        });
        return { user: response.data.user };
    } catch (error) {
        if (error.response?.status === 401 || error.response?.status === 403) {
            return { user: null };
        }
        throw error;
    }
}

export default getMe;