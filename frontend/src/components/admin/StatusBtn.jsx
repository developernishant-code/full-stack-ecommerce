'use client'

import { axiosinstance } from "@/helper/helper";
import { notify } from "@/helper/helper";
import { useRouter } from "next/navigation";

function StatusBtn({ value, id, field }) {

  const router = useRouter()

  function statusHandler() {
    axiosinstance.patch(`category/update/${id}`, {field})
      .then((res) => {
        if (res.data.success) {
          notify(res?.data?.message, true);
          router.refresh()
        }
      })
      .catch((err) => {
        // console.log(err)
        const message =
          err?.response?.data?.message ||
          err?.message ||
          "Something went wrong";

        notify(message, false);
      })
  }
  const label = {
    status:["Active","Inactive"],
    is_home:["Home","Not Home"],
    is_top:["Top","Not Top"],
    is_popular:["Popular","Not Popular"],
  }
  const [truelabel,falselabel] = label[field]
  // console.log(truelabel,falselabel)
  return (
    <button
      onClick={statusHandler}
      className={`px-6 py-2 rounded cursor-pointer text-sm font-bold ${
        value
          ? "text-green-600 bg-green-100"
          : "text-red-600 bg-red-100"
      }`}
    >
      {value ? truelabel : falselabel}
    </button>
  )
}

export default StatusBtn