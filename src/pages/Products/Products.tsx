import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types";

const categories = [
  "weights",
  "fitness",
  "hydration",
  "cardio",
  "accessories",
  "treadmills",
];

const Products: React.FC = () => {
  const { data: initialProducts, isLoading, error } = useGetProductsQuery(null);
  const [products, setProducts] = useState<TProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("");

  useEffect(() => {
    console.log(initialProducts?.data);
    if (initialProducts?.data) {
      setProducts(initialProducts?.data);
      setFilteredProducts(initialProducts?.data);
    }
  }, [initialProducts]);

  // Handle search by product name
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    filterProducts(value, selectedCategories, minPrice, maxPrice, sortOption);
  };

  // Handle category filter selection
  const handleCategoryFilter = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
    filterProducts(
      searchTerm,
      updatedCategories,
      minPrice,
      maxPrice,
      sortOption,
    );
  };

  // Handle price range filters
  // const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = event.target;
  //   setMinPrice(value);
  //   filterProducts(searchTerm, selectedCategories, value, maxPrice, sortOption);
  // };

  // const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = event.target;
  //   setMaxPrice(value);
  //   filterProducts(searchTerm, selectedCategories, minPrice, value, sortOption);
  // };

  // Handle sorting by price
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSortOption(value);
    filterProducts(searchTerm, selectedCategories, minPrice, maxPrice, value);
  };

  // Filter products based on search term, categories, price range, and sort option
  const filterProducts = (
    search: string,
    categories: string[],
    minPrice: string,
    maxPrice: string,
    sort: string,
  ) => {
    let filtered = [...products];

    // Filter by search term
    if (search) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Filter by categories
    if (categories.length > 0) {
      filtered = filtered.filter((product) =>
        categories.includes(product.category),
      );
    }

    // Filter by price range
    if (minPrice || maxPrice) {
      filtered = filtered.filter((product) => {
        const price = product.price;
        const min = parseFloat(minPrice) || 0;
        const max = parseFloat(maxPrice) || Number.MAX_SAFE_INTEGER;
        return price >= min && price <= max;
      });
    }

    // Sort products
    if (sort === "priceAsc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "priceDesc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setMinPrice("");
    setMaxPrice("");
    setSortOption("");
    setFilteredProducts(products);
  };

  if (isLoading)
    return (
      <div className="p-3 text-center">
        <span className="loading loading-ball loading-lg text-white"></span>
      </div>
    );
  if (error) return <div>Error</div>;

  return (
    <div className="container mx-auto pt-8">
      <div className="mt-8 flex justify-center">
        <p className="text-3xl text-white">
          Showing {filteredProducts.length} product(s)
        </p>
      </div>
      <div className="mb-6 flex items-center justify-between">
        <input
          type="text"
          placeholder="Search by product name"
          value={searchTerm}
          onChange={handleSearch}
          className="mr-4 rounded-md border border-gray-300 px-4 py-2"
        />
        <div className="flex">
          <div className="mr-4">
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="rounded-md border border-gray-300 px-4 py-2"
            >
              <option value="">Sort by Price</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
            </select>
          </div>
          <button
            onClick={clearFilters}
            className="rounded-md bg-gray-800 px-4 py-2 text-white outline outline-1 hover:bg-gray-700"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Category Filters */}
      <div className="mb-4 flex">
        {categories.map((category) => (
          <label key={category} className="mr-4 inline-flex items-center">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryFilter(category)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-white">{category}</span>
          </label>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
