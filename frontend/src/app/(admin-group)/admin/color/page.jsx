import { GetColor } from "@/api/Color";
import React from "react";
import Link from "next/link";
import StatusBtn from "@/components/admin/StatusBtn";
import DeleteBtn from "@/components/admin/DeleteBtn";

const CategoryTable = async () => {
  const allColor = await GetColor();
  const colors = allColor.allColor || [];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Color Management
        </h1>

        <Link href="/admin/color/add">
          <button className="px-5 py-2 bg-amber-600 text-white rounded-lg shadow hover:bg-amber-700 transition">
            + Add Color
          </button>
        </Link>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">

        {/* Scroll Container */}
        <div className="max-h-[500px] overflow-y-auto overflow-x-auto">

          <table className="w-full text-sm">

            {/* Head */}
            <thead className="bg-gray-100 text-gray-700 sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3 text-left">Color</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Slug</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {colors.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-10 text-gray-500"
                  >
                    <h2 className="text-lg font-semibold">
                      No colors Found
                    </h2>
                  </td>
                </tr>
              ) : (
                colors.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition"
                  >

                    {/* Color Box */}
                    <td className="px-4 py-3">
                      <div
                        className="w-16 h-8 rounded border"
                        style={{ backgroundColor: item.hex_code }}
                      ></div>
                    </td>

                    {/* Name */}
                    <td className="px-4 py-3 font-medium text-gray-800">
                      {item.name}
                    </td>

                    {/* Slug */}
                    <td className="px-4 py-3 text-gray-600">
                      {item.slug}
                    </td>

                    {/* Status */}
                    <td className="px-4 py-3">
                      <StatusBtn
                        value={item.status}
                        id={item._id}
                        field="status"
                        endpoint="color"
                      />
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-3">
                      <div className="flex gap-2">

                        <Link href={`/admin/color/edit/${item._id}`}>
                          <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition text-xs">
                            Edit
                          </button>
                        </Link>

                        <DeleteBtn id={item._id} endpoint="color" />

                      </div>
                    </td>

                  </tr>
                ))
              )}
            </tbody>

          </table>

        </div>
      </div>
    </div>
  );
};

export default CategoryTable;