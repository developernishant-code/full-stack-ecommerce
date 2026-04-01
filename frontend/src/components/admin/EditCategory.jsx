'use client'
import { useRef } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { axiosAPIinstance, notify, slugCreate } from "@/helper/helper";
import { useRouter } from "next/navigation";

export default function EditCateogy({ category }) {

    const router = useRouter()


    const nameRef = useRef(null)
    const slugRef = useRef(null)

    function generateslug() {
        const name = nameRef.current.value


        if (!name) {
            slugRef.current.value = ""
            return
        }

        const slug = slugCreate(name)
        slugRef.current.value = slug
    }

    function clearForm() {
        nameRef.current.value = ""
        slugRef.current.value = ""
    }

      function submitHandler(event) {
        event.preventDefault()

        const data = new FormData()
        data.append("name", nameRef.current.value);
        data.append("slug", slugRef.current.value);
        data.append("image", event.target.image.files[0]);
        // console.log(event.target.image.files[0])


        axiosAPIinstance.put(`/category/update/${category._id}`, data)
          .then((response) => {

            if (response.data.success) {
              router.push("/admin/category")
            }

          })
          .catch((error) => {
            notify(error?.response?.data?.message || "Something went wrong", false)
          })
      }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">

            <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-8">

                <h2 className="text-2xl font-bold mb-2">Edit Category</h2>
                <p className="text-gray-500 mb-6">
                    Edit category with slug and image
                </p>

                <form onSubmit={submitHandler} className="space-y-5">

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Category Name
                        </label>
                        <input
                            required
                            onChange={generateslug}
                            ref={nameRef}
                            defaultValue={category?.name}
                            type="text"
                            placeholder="Enter category name"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Slug
                        </label>
                        <input
                            ref={slugRef}
                            readOnly
                            defaultValue={category?.slug}
                            type="text"
                            placeholder="enter-category-slug"
                            className="w-full border border-orange-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Image
                        </label>
                        <input
                            name="image"
                            type="file"
                            accept="image/*"
                            className="w-full border border-gray-300 rounded-lg p-3 file:mr-4 file:py-2 file:px-4 
              file:rounded-md file:border-0 file:text-sm file:font-semibold 
              file:bg-orange-50 file:text-orange-600 hover:file:bg-orange-100"
                        />
                        <img
                            className="w-[35px] my-4 h-[30px] rounded-md object-cover"
                            src={process.env.NEXT_PUBLIC_CATEGORY_IMAGE_URL + category.image}
                            alt={category.name}
                        />
                    </div>


                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={clearForm}
                            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-5 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
                        >
                            Edit Category
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}