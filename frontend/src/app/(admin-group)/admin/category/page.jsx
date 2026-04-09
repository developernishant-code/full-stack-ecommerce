import { getCategories } from "@/api/Categoryapi";
import React from "react";
import Link from "next/link";
import StatusBtn from "@/components/admin/StatusBtn";
import DeleteBtn from "@/components/admin/DeleteBtn";

const CategoryTable = async () => {
  const allcategories = await getCategories();
  const categories = allcategories.allcategories;
  

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Category Management
        </h1>

        <Link href="/admin/category/add">
          <button className="px-5 py-2 bg-amber-600 text-white rounded-lg shadow hover:bg-amber-700 transition">
            + Add Category
          </button>
        </Link>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">

            {/* Head */}
            <thead className="bg-gray-100 text-gray-700 text-sm">
              <tr>
                <th className="p-4 text-left">Image</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Slug</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>

              {categories.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center p-10 text-gray-500"
                  >
                    <h2 className="text-lg font-semibold">
                      No Categories Found
                    </h2>
                  </td>
                </tr>
              ) : (
                categories.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition"
                  >

                    {/* Image */}
                    <td className="p-4">
                      <img
                        src={
                          process.env.NEXT_PUBLIC_CATEGORY_IMAGE +
                          item.image
                        }
                        alt={item.name}
                        className="w-14 h-14 object-cover rounded-lg border"
                      />
                    </td>

                    {/* Name */}
                    <td className="p-4 font-semibold text-gray-800">
                      {item.name}
                    </td>

                    {/* Slug */}
                    <td className="p-4 text-gray-600">
                      {item.slug}
                    </td>

                    {/* Status */}
                    <td className="p-4">
                      <div className="flex flex-wrap gap-2">
                        <StatusBtn
                          value={item.status}
                          id={item._id}
                          field="status"
                          endpoint="category"
                        />

                        <StatusBtn
                          value={item.is_home}
                          id={item._id}
                          field="is_home"
                          endpoint="category"
                        />

                        <StatusBtn
                          value={item.is_top}
                          id={item._id}
                          field="is_top"
                          endpoint="category"
                        />

                        <StatusBtn
                          value={item.is_popular}
                          id={item._id}
                          field="is_popular"
                          endpoint="category"
                        />
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="p-4">
                      <div className="flex gap-2">

                        <Link
                          href={`/admin/category/edit/${item._id}`}
                        >
                          <button className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                            Edit
                          </button>
                        </Link>

                        <DeleteBtn id={item._id} endpoint="category" />

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