import { useQuery } from "@tanstack/react-query";

const fetchProducts = async ({ queryKey }) => {
  const [, page, limit] = queryKey;
  const skip = (page - 1) * limit;

  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status}`);
  }

  return res.json();
};

export default function useProducts(page, limit) {
  return useQuery({
    queryKey: ["products", page, limit],
    queryFn: fetchProducts,
  });
}
