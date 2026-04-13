import React from "react";
import { Pencil } from "lucide-react";
import Link from "next/link";
import StatusBtn from "@/components/admin/StatusBtn";
import DeleteBtn from "@/components/admin/DeleteBtn";
import { GetBrands } from "@/api/Brand";



export default async function BrandTable() {
  const allBrands = await GetBrands();
  const brands = allBrands.allBrand;
  // console.log(brands)
  return (
    <div className="p-6 bg-[#eaeff8] min-h-screen">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Brand Management
        </h1>

        <Link href="/admin/brand/add">
          <button className="px-5 py-2.5 bg-[#ff7b00] text-white rounded-lg shadow hover:bg-[#e56f00] transition">
            + Add Brand
          </button>
        </Link>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            {/* Header */}
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="py-4 px-4 text-left">Image</th>
                <th className="py-4 px-4 text-left">Brand Name</th>
                <th className="py-4 px-4 text-left">Slug</th>
                <th className="py-4 px-4 text-left">Status</th>
                <th className="py-4 px-4 text-center">Actions</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {brands.map((brand, index) => {
                return (
                  <tr key={index} className="border-t hover:bg-gray-50 transition">
                    <td className="py-4 px-4">
                      <img
                        src={process.env.NEXT_PUBLIC_BRAND_IMAGE + brand.image}
                        alt="brand"
                        className="w-10 h-10 rounded-lg object-cover border"
                      />
                    </td>

                    <td className="py-4 px-4 font-medium text-gray-800">
                      {brand.name}
                    </td>

                    <td className="py-4 px-4 text-gray-500">{brand.slug}</td>

                    <td className="py-4 flex px-4 space-x-2">
                      <StatusBtn
                          value={brand.is_top}
                          id={brand._id}
                          endpoint="brand"
                          field="is_top"
                        />
                      <StatusBtn
                          value={brand.status}
                          id={brand._id}
                          field="status"
                          endpoint="brand"
                        />
                    </td>

                    <td className="py-4 px-4">
                      <div className="flex justify-center gap-2">
                        <Link href={`/admin/brand/edit/${brand._id}`}>
                          <button className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition">
                            <Pencil size={16} className="text-blue-600" />
                          </button>
                        </Link>

                        <DeleteBtn id={`${brand._id}`} endpoint="brand" />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
