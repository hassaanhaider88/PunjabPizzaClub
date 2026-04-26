import { AiFillDelete } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdAddBox } from "react-icons/md";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const statusStyles = {
  "In Stock": "bg-green-500/20 text-green-400 border-green-500",
  "Out Off Stock": "bg-red-500/20 text-red-400 border-red-500",
  Soon: "bg-yellow-500/20 text-yellow-400 border-yellow-500",
};

const statusOptions = ["In Stock", "Out Off Stock", "Soon"];

export default function AllProductsAdminPage() {
  const allProducts = useSelector((state) => state.products);
  const [products, setProducts] = useState(allProducts?.items);

  const updateStatus = (id, value) => {
    setProducts((prev) =>
      prev.map((p) => (p._id === id ? { ...p, stockStatus: value } : p)),
    );
  };

  return (
    <div className="min-h-screen py-6">
      <div className="flex py-3 gap-3 mr-5 justify-end items-center">
        <Link to={"/add-new-product"} className="flexCenter">
          <MdAddBox size={30} />
          Add New Products
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border border-white/10 rounded-lg overflow-hidden">
          <thead className="bg-white/5 text-left">
            <tr>
              <th className="p-3">Image</th>
              <th className="p-3">Product</th>
              <th className="p-3">Category</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Prices</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="border-t border-white/10">
                <td className="p-3 w-40">
                  <img
                    src={product.url}
                    alt={product.name}
                    className="w-14 h-14 object-cover rounded"
                  />
                </td>
                <td className="p-3 w-40 font-medium">
                  {product.name.slice(0, 20)}...
                </td>

                <td className="p-3 w-40">{product.category}</td>

                <td className="p-3 w-40">
                  <span
                    className={`px-2 py-1 text-xs border rounded ${
                      statusStyles[product.stockStatus]
                    }`}
                  >
                    {product.stockStatus}
                  </span>

                  <div className="mt-2">
                    <select
                      value={product.stockStatus}
                      onChange={(e) =>
                        updateStatus(product._id, e.target.value)
                      }
                      className="bg-black border border-white/20 text-white text-sm p-1 rounded focus:outline-none"
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>
                </td>

                <td className="p-3 ">
                  <div className="space-y-1 grid grid-cols-2 gap-2">
                    {product.prices.map((p, idx) => (
                      <div key={idx} className="text-xs bg-white/5 p-2 rounded">
                        <div className="font-medium">{p.size}</div>
                        <div>
                          Original:{" "}
                          <span className="line-through text-white/60">
                            {p.originalPrice}
                          </span>
                        </div>
                        <div className="text-[#ff4757]">
                          Offer: {p.offerPrice}
                        </div>
                      </div>
                    ))}
                  </div>
                </td>

                <td className="p-3 w-40">
                  <button className="bg-[green]  px-3 py-1 rounded text-sm hover:opacity-80">
                    <AiTwotoneEdit size={20} /> Edit
                  </button>
                  <button className="bg-[#ff4757]  ml-5 px-3 py-1 rounded text-sm hover:opacity-80">
                    <AiFillDelete size={20} /> Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
