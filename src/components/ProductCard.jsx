import React from "react";

export default function ProductCard({ product }) {
  return (
    <article className="bg-white shadow-sm rounded overflow-hidden hover:shadow-lg transition p-3 flex flex-col">
      <div className="w-full h-40 bg-gray-100 rounded overflow-hidden mb-3">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-sm font-semibold mb-1">{product.title}</h3>
        <p className="text-xs text-gray-600 mb-2">
          {product.description.slice(0, 100)}
          {product.description.length > 100 ? "..." : ""}
        </p>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <span className="font-bold text-lg">{product.price} $</span>
        <span className="text-sm text-gray-500">{product.rating} ★</span>
      </div>
    </article>
  );
}
