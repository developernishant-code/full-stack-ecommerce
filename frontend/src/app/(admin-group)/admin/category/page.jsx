import { getCategories } from "@/api/Categoryapi";
import React from "react";
import Link from "next/link";
import StatusBtn from "@/components/admin/StatusBtn";
import DeleteBtn from "@/components/admin/DeleteBtn";

const CategoryTable = async () => {
  const allcategories = await getCategories()
  const categories = await allcategories.allcategories
  return (
    <div className="p-6">
      <Link href={"/admin/category/add"}>
        <button className="px-6 py-2 bg-amber-600 text-white my-3 cursor-pointer">Add Category</button>
      </Link>

      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Category Table</h2>
        </div>

        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-sm font-semibold text-gray-600">Name</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Slug</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Status</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>

          <tbody>
            {
              categories.length == 0 ?
                <tr>
                  <td colSpan={4} className="align-middle text-center p-4">
                    <h1 className="font-bold">No Categories found</h1>
                  </td>
                </tr>


                :
                categories.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-4 font-medium">{item.name}</td>
                    <td className="p-4 text-gray-600">{item.slug}</td>

                    <td className="p-4 flex gap-2">
                      <StatusBtn value={item.status} id={item._id} field="status" />
                      <StatusBtn value={item.is_home} id={item._id} field="is_home" />
                      <StatusBtn value={item.is_top} id={item._id} field="is_top" />
                      <StatusBtn value={item.is_popular} id={item._id} field="is_popular" />
                    </td>

                    <td className="p-4 space-x-2">
                      <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Edit
                      </button>

                      <DeleteBtn id={item._id} />
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryTable;

