"use client";

import { useState } from "react";
import Link from "next/link";
import StatusBtn from "@/components/admin/StatusBtn";
import DeleteBtn from "@/components/admin/DeleteBtn";
import { FaImages } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import ViewModel from "./ViewModel";

export default function ProductTableClient({ product }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">
          Product Management
        </h1>

        <Link href="/admin/product/add">
          <button className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 transition text-white rounded-lg shadow-md">
            + Add Product
          </button>
        </Link>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">

        {/* Scroll wrapper */}
        <div className="max-h-[500px] overflow-y-auto">

          <table className="w-full text-sm">

            {/* Head */}
            <thead className="bg-gray-100 sticky top-0 z-10">
              <tr className="text-gray-600 uppercase text-xs tracking-wider">
                <th className="p-4 text-left">Image</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Slug</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {product.map((item) => (
                <tr
                  key={item._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  {/* Image */}
                  <td className="p-4">
                    <img
                      src={
                        process.env.NEXT_PUBLIC_PRODUCT_IMAGE +
                        item.thumbnail
                      }
                      className="w-24 h-16 object-cover rounded-md border"
                    />
                  </td>

                  {/* Name */}
                  <td className="p-4 font-medium text-gray-800">
                    {item.name}
                  </td>

                  {/* Slug */}
                  <td className="p-4 text-gray-500">
                    {item.slug}
                  </td>

                  {/* Status */}
                  <td className="p-4">
                    <StatusBtn
                      value={item.status}
                      id={item._id}
                      field="status"
                      endpoint="product"
                    />
                  </td>

                  {/* Actions */}
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-2">

                      {/* Edit */}
                      <Link href={`/admin/product/edit/${item._id}`}>
                        <button className="px-3 py-1.5 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-sm">
                          Edit
                        </button>
                      </Link>

                      {/* Delete */}
                      <DeleteBtn id={item._id} endpoint="product" />

                      {/* Images */}
                      <Link href={`/admin/product/other-images/${item._id}`}>
                        <button className="p-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md shadow-sm">
                          <FaImages size={14} />
                        </button>
                      </Link>

                      {/* View */}
                      <button
                        onClick={() => {
                          setSelected(item);
                          setOpen(true);
                        }}
                        className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-md shadow-sm"
                      >
                        <BsEye size={14} />
                      </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <ViewModel
          selected={selected}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}