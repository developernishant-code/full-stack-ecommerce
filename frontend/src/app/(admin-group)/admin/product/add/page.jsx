"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Select from "react-select";
import { slugCreate,notify } from "@/helper/helper";
import { getCategories } from "@/api/Categoryapi";
import { GetBrands } from "@/api/Brand";
import { GetColor } from "@/api/Color";
import { axiosinstance } from "@/helper/helper";
import { Editor } from 'primereact/editor';

export default function AddProductForm() {
    const [categories, setcategories] = useState([]);
    const [brands, setbrands] = useState([]);
    const [colors, setcolors] = useState([]);
    const [selectedCateogry, setselectedCateogry] = useState(null)
    const [selectedBrand, setselectedBrand] = useState(null)
    const [selectedColors, setselectedColors] = useState([])
    const router = useRouter();
    const [loading, setloading] = useState(false);
    const nameRef = useRef(null);
    const slugRef = useRef(null);
    const original_price_ref = useRef(null);
    const discount_price_ref = useRef(null);
    const final_price_ref = useRef(null);

    const getData = async () => {
        
        const [catRes, BrandRes, colRes] = await Promise.all([
            getCategories(),
            GetBrands(),
            GetColor(),
        ]);
        // console.log(catRes, BrandRes, colRes)
        setcategories(
            catRes?.allcategories?.map((cat) => ({ label: cat.name, value: cat._id })) || [],
        );
        setbrands(
            BrandRes?.allBrand?.map((brand) => ({
                label: brand.name,
                value: brand._id,
            })) || [],
        );
        setcolors(
            colRes?.allColor?.map((color) => ({ label: color.name, value: color._id })) ||
            [],
        )

        // console.log(colRes)
    };

    useEffect(() => {
        getData();
    }, []);



    function generateSlug() {
        const name = nameRef.current.value;
        const slug = slugCreate(name);
        slugRef.current.value = slug;
    }

    function clearform() {
        nameRef.current.value = "";
        slugRef.current.value = "";
    }

    const [text,setText] = useState("")

    function submithandler(event) {
        event.preventDefault();
        setloading(true);

        const payload = new FormData();

        payload.append("name", nameRef.current.value);
        payload.append("slug", slugRef.current.value);
        payload.append("thumbnail", event.target.thumbnail.files[0]);
        payload.append("original_price", original_price_ref.current.value);
        payload.append("final_price", final_price_ref.current.value);
        payload.append("discount_price", discount_price_ref.current.value);

        payload.append("category_id", selectedCateogry?.value);
        payload.append("brand_Id", selectedBrand?.value);

        payload.append(
            "color_ids",
            JSON.stringify(selectedColors.map((color) => color.value))
        );

        payload.append("short_description", event.target.short_description.value);
        payload.append("long_description", text);
        // console.log(event.target.category_id)

        axiosinstance
            .post("/product/create", payload)
            .then((res) => {
                if (res.data.success) {
                    notify(res?.data?.message, true);
                    clearform();
                    router.push("/admin/product");
                    router.refresh();
                }
            })
            .catch((err) => {
                const message =
                    err?.response?.data?.message ||
                    err?.message ||
                    "Something went wrong";

                notify(message, false);
            })
            .finally(() => {
                setloading(false);
            });
    }

    function calculateprice() {
        let op = Number(original_price_ref.current.value);
        let fp = Number(final_price_ref.current.value);

        let dp = Math.floor(((op - fp) / op) * 100);

        discount_price_ref.current.value = dp;
    }

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
            <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-4xl">
                <h2 className="text-2xl font-semibold mb-6">Add Product</h2>

                <form onSubmit={submithandler} className="space-y-6">
                    {/* Name & Slug */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                onChange={generateSlug}
                                ref={nameRef}
                                type="text"
                                placeholder="Enter product name"
                                className="w-full border px-3 py-2 rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Slug</label>
                            <input
                                ref={slugRef}
                                readOnly
                                type="text"
                                placeholder="Auto generated slug"
                                className="w-full border px-3 py-2 rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Short Description */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Short Description
                        </label>
                        <textarea
                            name="short_description"
                            placeholder="Enter short description"
                            className="w-full border px-3 py-2 rounded-lg"
                        />
                    </div>

                    {/* Long Description */}
                    <div>
                        <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />

                    </div>

                    {/* Prices */}
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Original Price
                            </label>
                            <input
                                onChange={calculateprice}
                                ref={original_price_ref}
                                type="number"
                                placeholder="Enter price"
                                className="w-full border px-3 py-2 rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Discount %
                            </label>
                            <input
                                readOnly
                                ref={discount_price_ref}
                                type="number"
                                placeholder="Enter discount"
                                className="w-full border px-3 py-2 rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Final Price
                            </label>
                            <input
                                onChange={calculateprice}
                                ref={final_price_ref}
                                type="number"
                                placeholder="Auto calculated"
                                className="w-full border px-3 py-2 rounded-lg bg-gray-100"
                            />
                        </div>
                    </div>

                    {/* Category Brand Colors */}
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Category</label>
                            <Select
                                name="category_id"
                                placeholder="Select Category"
                                options={categories}
                                onChange={(option) => setselectedCateogry(option)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Brand
                            </label>
                            <Select
                                name="brand_id"
                                placeholder="Select Brand"
                                options={brands}
                                onChange={(option) => setselectedBrand(option)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Colors
                            </label>
                            <Select
                                name="color_ids"
                                isMulti
                                placeholder="Select Colors"
                                options={colors}
                                onChange={(option) => setselectedColors(option)}
                            />
                        </div>
                    </div>

                    {/* Thumbnail */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Thumbnail Image
                        </label>
                        <input
                            name="thumbnail"
                            type="file" className="w-full border px-3 py-2 rounded-lg" />
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
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
