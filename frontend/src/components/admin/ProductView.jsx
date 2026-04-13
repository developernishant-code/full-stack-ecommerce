"use client";

import { useEffect, useState } from "react";
import StatusBtn from "./StatusBtn";

export default function ViewModel({ selected, onClose }) {

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 200);
  };

  if (!selected) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Overlay */}
      <div
        onClick={handleClose}
        className={`absolute inset-0 bg-black transition ${
          show ? "opacity-50" : "opacity-0"
        }`}
      />

      {/* Modal */}
      <div
        className={`relative bg-white w-full max-w-5xl rounded-xl p-4 transition ${
          show ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >

        {/* Header */}
        <div className="flex justify-between border-b pb-2">
          <h2 className="text-lg font-bold">Product Details</h2>
          <button onClick={handleClose}>✖</button>
        </div>

        <div className="flex gap-4 mt-4">

          {/* LEFT */}
          <div className="w-1/3">
            <img
              src={
                process.env.NEXT_PUBLIC_PRODUCT_IMAGE +
                selected.thumbnail
              }
              className="w-full h-48 object-cover"
            />

            <div className="mt-2 text-xs space-y-2">
              <p>Stock: {selected.stock ? "Yes" : "No"}</p>

              <StatusBtn
                value={selected.is_top}
                id={selected._id}
                field="is_top"
                endpoint="product"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-2/3 text-sm space-y-2">

            <h3 className="font-bold">{selected.name}</h3>
            <p>{selected.slug}</p>

            <p>₹ {selected.final_price}</p>

            <p>Category: {selected.category_id?.name}</p>
            <p>Brand: {selected.brand_Id?.name}</p>

            <p>{selected.short_description}</p>

            {/* Colors */}
            <div className="flex gap-2 flex-wrap">
              {selected.color_ids?.map((c) => (
                <span
                  key={c._id}
                  className="px-2 py-1 border rounded"
                >
                  {c.name}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}