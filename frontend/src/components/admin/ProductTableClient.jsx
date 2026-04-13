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
    <div className="p-6  bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Product Management</h1>

        <Link href="/admin/product/add">
          <button className="px-5 py-2 bg-amber-600 text-white rounded">
            + Add Product
          </button>
        </Link>
      </div>

      {/* Table */}
      <div className="bg-white max-h-[500px] overflow-y-auto rounded-xl shadow overflow-hidden">
        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Slug</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {product.map((item) => (
              <tr key={item._id} className="border-b">

                <td className="p-3">
                  <img
                    src={
                      process.env.NEXT_PUBLIC_PRODUCT_IMAGE +
                      item.thumbnail
                    }
                    className="w-24 h-16 object-cover"
                  />
                </td>

                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.slug}</td>

                <td className="p-3">
                  <StatusBtn
                    value={item.status}
                    id={item._id}
                    field="status"
                    endpoint="product"
                  />
                </td>

                <td className="p-3 flex gap-2">

                  {/* Edit */}
                  <Link href={`/admin/product/edit/${item._id}`}>
                    <button className="px-3 py-1 bg-blue-500 text-white rounded">
                      Edit
                    </button>
                  </Link>

                  {/* Delete */}
                  <DeleteBtn id={item._id} endpoint="product" />

                  {/* Images */}
                  <Link href={`/admin/product/other-images/${item._id}`}>
                    <button className="px-3 py-2 bg-indigo-500 text-white rounded">
                      <FaImages />
                    </button>
                  </Link>

                  {/* 👁 View */}
                  <button
                    onClick={() => {
                      setSelected(item); 
                      setOpen(true);
                    }}
                    className="px-3 py-2 bg-green-500 text-white rounded"
                  >
                    <BsEye />
                  </button>

                </td>

              </tr>
            ))}
          </tbody>

        </table>
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