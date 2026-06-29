import Link from "next/link";

async function getRelatedProducts(category_id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/product?category=${category_id}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  return data.allProduct;
}

export default async function RelatedProducts({
  category_id,
  currentId,
}) {
  const products = await getRelatedProducts(category_id);

  const filtered = products.filter(
    (item) => item._id !== currentId
  );

  return (
    <div className="mt-14">
      <h2 className="text-2xl font-semibold mb-6">
        Related Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {filtered.slice(0, 4).map((item) => (
          <Link key={item._id} href={`/product/${item.slug}`}>
            <div className="border rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer">

              <img
                src={
                  process.env.NEXT_PUBLIC_PRODUCT_IMAGE +
                  item.thumbnail
                }
                className="w-full h-40 object-cover"
              />

              <div className="p-3">
                <h3 className="font-medium text-sm">
                  {item.name}
                </h3>

                <p className="text-green-600 font-semibold">
                  ₹{item.final_price}
                </p>
              </div>

            </div>
          </Link>
        ))}

      </div>
    </div>
  );
}