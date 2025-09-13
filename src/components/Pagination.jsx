import React from "react";

export default function Pagination({ page, setPage, totalPages }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center justify-center gap-2 mt-6 flex-wrap ">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50 cursor-pointer"
      >
        previous
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`px-3 py-1 rounded cursor-pointer ${
            p === page ? "bg-blue-600 text-white" : "bg-gray-100"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page === totalPages}
        className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50 cursor-pointer"
      >
        next
      </button>
    </nav>
  );
}
