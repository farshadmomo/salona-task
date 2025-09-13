import React, { useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

export default function ProductsPage() {
  const [page, setPage] = useState(1);
  const limit = 12;
  const { data, isLoading, isError } = useProducts(page, limit);

  const totalPages = data ? Math.ceil(data.total / limit) : 1;

  return (
    <main className="p-4 max-w-6xl mx-auto">
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold p-4 bg-blue-500 w-full rounded-xl text-white text-center">
          Products List
        </h1>
      </header>

      {isLoading ? (
        <div className="text-center py-20 text-4xl font-bold text-gray-500">
          Loading...
        </div>
      ) : isError ? (
        <div className="text-center py-20 text-4xl font-bold text-red-500">
          Could not fetch products
        </div>
      ) : (
        <>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </section>

          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
      )}
    </main>
  );
}
