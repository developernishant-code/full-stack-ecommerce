'use client'
import { axiosinstance, notify, slugCreate } from "@/helper/helper";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Select from 'react-select'

export default function AddBrandForm() {

    const nameRef = useRef(null)
    const slugRef = useRef(null)
    const router = useRouter()

    const [categories, setCategories] = useState([])

    function generateslug() {
        const name = nameRef.current.value
        const slug = slugCreate(name)
        slugRef.current.value = slug
    }

    useEffect(() => {
        axiosinstance.get("/category")
            .then((res) => {
                setCategories(res.data.allcategories)
            })
            .catch(() => {
                notify("Category load failed", false)
            })
    }, [])

    function submithandler(event) {

        event.preventDefault()

        const payload = new FormData()

        payload.append("name", nameRef.current.value)
        payload.append("slug", slugRef.current.value)
        payload.append("category_id", event.target.category_id.value)
        payload.append("image", event.target.image.files[0])
        // console.log(event.target.image.files[0])

        axiosinstance.post("/brand/create", payload)
            .then((res) => {
                notify(res.data.message, true)
                router.refresh()
                router.push("/admin/brand")
            })
            .catch((error) => {
                notify(
                    error?.response?.data?.message || "Something went wrong",
                    false
                )
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">

            <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">

                <h2 className="text-xl font-semibold mb-4 text-center">
                    Add Brand
                </h2>

                <form onSubmit={submithandler} className="space-y-4">

                    {/* Brand Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Brand Name
                        </label>

                        <input
                            onChange={generateslug}
                            ref={nameRef}
                            type="text"
                            placeholder="Enter Brand name"
                            className="w-full border px-3 py-2 rounded-lg"
                        />
                    </div>

                    {/* Slug */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Brand Slug
                        </label>

                        <input
                            ref={slugRef}
                            type="text"
                            placeholder="Enter Brand slug"
                            className="w-full border px-3 py-2 rounded-lg"
                        />
                    </div>

                    {/* Category */}
                    <div>

                        <label className="block text-sm font-medium mb-1">
                            Select Categories
                        </label>
                        <Select isMulti name="category_id" placeholder="Select Category"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" options={
                                categories.map((item, index) => {
                                    return (
                                        { value: item._id, label: item.name }
                                    )
                                })
                            } />

                    </div>

                    {/* Image */}
                    <div> 

                        <label className="block text-sm font-medium mb-1">
                            Brand Image
                        </label>

                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            className="w-full border px-3 py-2 rounded-lg"
                        />

                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">

                        <button
                            type="button"
                            className="w-full bg-gray-500 text-white py-2 rounded-lg"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-2 rounded-lg"
                        >
                            Add Brand
                        </button>

                    </div>

                </form>

            </div>
        </div>
    );
}