"use client";
import { axiosinstance, notify, slugCreate } from "@/helper/helper";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function CategoryForm() {
    const router = useRouter();
    const [loading, setloading] = useState(false);

    const nameRef = useRef(null);
    const slugRef = useRef(null);
    const hexRef = useRef(null);

    function generateSlug() {
        const name = nameRef.current.value;
        const slug = slugCreate(name);
        slugRef.current.value = slug;
    }

    function clearform() {
        nameRef.current.value = "";
        slugRef.current.value = "";
        hexRef.current.value = "";
    }

    function submithandler(event) {
    event.preventDefault();
    setloading(true);

    const payload = {
        name: nameRef.current.value,
        slug: slugRef.current.value,
        hex_code: hexRef.current.value
    };

    axiosinstance
        .post("/color/create", payload)
        .then((res) => {
            if (res.data.success) {
                notify(res?.data?.message, true);
                clearform();
                router.push("/admin/color");
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

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="w-full max-w-lg bg-white shadow-md rounded-2xl p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Add Color
                </h2>

                <form onSubmit={submithandler} className="space-y-5">
                    
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Color Name
                        </label>
                        <input
                            ref={nameRef}
                            onChange={generateSlug}
                            type="text"
                            placeholder="Enter color name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Slug */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Slug
                        </label>
                        <input
                            ref={slugRef}
                            type="text"
                            placeholder="Enter slug"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Hex Code */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Hex Code
                        </label>
                        <input
                            ref={hexRef}
                            type="color"
                            placeholder="#000000"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={clearform}
                            className="w-full bg-gray-500 cursor-pointer text-white py-2.5 rounded-lg hover:bg-gray-600 transition"
                        >
                            Cancel
                        </button>

                        <button
                            disabled={loading}
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2.5 cursor-pointer rounded-lg hover:bg-blue-700 transition"
                        >
                            {loading ? "wait..." : "Add Color"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}