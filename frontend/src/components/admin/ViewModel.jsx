'use client'

import { useEffect, useState } from "react";
import StatusBtn from "./StatusBtn";

const ViewModel = ({ selected, onClose }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true); // animate in
    }, []);

    const handleClose = () => {
        setShow(false); // animate out
        setTimeout(() => {
            onClose(); // remove after animation
        }, 200);
    };

    if (!selected) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* Overlay */}
            <div
                onClick={handleClose}
                className={`absolute inset-0 bg-black transition-opacity duration-200 ${show ? "opacity-50" : "opacity-0"
                    }`}
            />

            {/* Modal */}
            <div
                className={`relative bg-white w-full max-w-5xl h-[500px] rounded-xl shadow-lg transform transition-all duration-200
        ${show
                        ? "scale-100 opacity-100 translate-y-0"
                        : "scale-95 opacity-0 translate-y-4"
                    }`}
            >

                

                {/* Body */}
                <div className="p-4">
                    
                    {/* Header */}
                    <div className="flex justify-between items-center border-b px-4 py-2">
                        <h2 className="text-lg font-bold">Product Details</h2>
                        <button onClick={onClose} className="text-lg cursor-pointer">✖</button>
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 p-4 gap-4 overflow-hidden">

                        {/* LEFT → IMAGE */}
                        <div className="w-1/3 flex flex-col gap-2">
                            <img
                                src={
                                    process.env.NEXT_PUBLIC_PRODUCT_IMAGE +
                                    selected.thumbnail
                                }
                                className="w-full h-48 object-cover rounded border"
                            />

                            {/* Small info */}
                            <div className="text-xs space-y-1">


                                <p className="flex mb-3 mt-3 items-center gap-4"><b>is_top:</b> <StatusBtn
                                    value={selected.is_top}
                                    id={selected._id}
                                    field="is_top"
                                    endpoint="product" /></p>
                                <p className="flex mb-3 items-center gap-4"><b>is_home:</b> <StatusBtn
                                    value={selected.is_home}
                                    id={selected._id}
                                    field="is_home"
                                    endpoint="product" /></p>
                                <p className="flex mb-3 items-center gap-4"><b>is_popular:</b> <StatusBtn
                                    value={selected.is_popular}
                                    id={selected._id}
                                    field="is_popular"
                                    endpoint="product" /></p>
                                <p><b>Stock:</b> {selected.stock ? "Yes" : "No"}</p>
                            </div>
                        </div>

                        {/* RIGHT → DETAILS */}
                        <div className="w-2/3 grid grid-cols-2 gap-x-4 gap-y-2 text-xs">

                            {/* Name */}
                            <div className="col-span-2">
                                <h3 className="text-md font-semibold">{selected.name}</h3>
                                <p className="text-gray-500">{selected.slug}</p>
                            </div>

                            {/* Price */}
                            <p><b>Original:</b> ₹{selected.original_price}</p>
                            <p><b>Final:</b> ₹{selected.final_price}</p>

                            <p><b>Discount:</b> {selected.discount_price}%</p>

                            {/* Category & Brand */}
                            <p><b>Category:</b> {selected.category_id?.name}</p>
                            <p><b>Brand:</b> {selected.brand_Id?.name}</p>



                            {/* Colors */}
                            <div className="col-span-2">
                                <p className="font-semibold">Colors:</p>
                                <div className="flex gap-2 mt-1 flex-wrap">
                                    {selected.color_ids?.map((color) => (
                                        <div
                                            key={color._id}
                                            className="flex items-center gap-1 border px-1 rounded"
                                        >
                                            <span
                                                className="w-3 h-3 rounded-full border"
                                                style={{ backgroundColor: color.hex_code }}
                                            />
                                            <span>{color.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Description (SHORT ONLY to avoid overflow) */}
                            <div className="col-span-2">
                                <p className="font-semibold">Description:</p>
                                <p className="text-gray-600 line-clamp-2">
                                    {selected.short_description}
                                </p>
                            </div>

                            {/* Dates */}
                            <div className="col-span-2 text-[10px] text-gray-400 mt-1">
                                <p>
                                    Created: {new Date(selected.createdAt).toLocaleDateString()}
                                </p>
                                <p>
                                    Updated: {new Date(selected.updatedAt).toLocaleDateString()}
                                </p>
                            </div>

                        </div>
                    </div>

                    
                </div>

            </div>
        </div>
    );
};

export default ViewModel;