'use client'

import { axiosinstance } from "@/helper/helper";
import { notify } from "@/helper/helper";
import { useRouter } from "next/navigation";

function StatusBtn({ value, id, field, endpoint }) {

  const router = useRouter()

  function statusHandler() {
    axiosinstance.patch(`${endpoint}/update/${id}`, { field })
      .then((res) => {
        if (res.data.success) {
          notify(res?.data?.message, true);
          router.refresh()
          console.log("first")
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
    status: ["Active", "Inactive"],
    is_home: ["Home", "Not Home"],
    is_top: ["Top", "Not Top"],
    is_popular: ["Popular", "Not Popular"],
  }
  const [truelabel, falselabel] = label[field]
  // console.log(truelabel,falselabel)
  return (
    <button
      onClick={statusHandler}
      className={`px-4 py-1.5 rounded-full cursor-pointer text-xs font-semibold flex items-center gap-2 transition-all duration-200 border
    ${value
          ? "bg-green-100 text-green-700 border-green-300 hover:bg-green-200"
          : "bg-red-100 text-red-700 border-red-300 hover:bg-red-200"
        }
  `}
    >
      {/* Dot Indicator */}
      <span
        className={`w-2 h-2 rounded-full ${value ? "bg-green-500" : "bg-red-500"
          }`}
      ></span>

      {/* Label */}
      {value ? truelabel : falselabel}
    </button>
  )
}

export default StatusBtn