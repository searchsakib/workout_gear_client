import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types";
import Container from "@/components/ui/Container";
import { Helmet } from "react-helmet-async";
import { RootState } from "@/redux/store";
import useBeforeUnload from "@/hooks/useBeforeUnload";
import { useAppSelector } from "@/redux/hooks";

const categories = [
  "weights",
  "fitness",
  "hydration",
  "cardio",
  "accessories",
  "treadmills",
];

const Products: React.FC = () => {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  useBeforeUnload(cartItems);

  const { data: initialProducts, isLoading, error } = useGetProductsQuery(null);
  const [products, setProducts] = useState<TProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("");

  useEffect(() => {
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
      <div className="min-h-screen p-3 text-center">
        <span className="loading loading-ball loading-lg text-white"></span>
      </div>
    );
  if (error) return <div>Error</div>;

  return (
    <Container>
      <Helmet>
        <title>Workout Gear | Products</title>
      </Helmet>
      <div className="mx-auto px-3 pb-16 pt-8">
        <div className="mb-8 mt-5 text-center">
          <p className="mb-8 text-3xl text-white md:mb-16">
            Showing {filteredProducts?.length} product(s)
          </p>
        </div>
        <div className="mb-7 flex flex-col items-center justify-between gap-5 md:flex-row md:gap-0">
          <input
            type="text"
            placeholder="Search by product name"
            value={searchTerm}
            onChange={handleSearch}
            className="mr-4 rounded-md border border-gray-300 px-4 py-2"
          />
          <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-0">
            <div className="mr-4">
              <select
                value={sortOption}
                onChange={handleSortChange}
                className="cursor-pointer rounded-md border border-gray-300 px-3 py-2"
              >
                <option value="">Sort by Price</option>
                <option value="priceAsc">Low to High</option>
                <option value="priceDesc">High to Low</option>
              </select>
            </div>
            <button
              onClick={clearFilters}
              className="rounded-md bg-transparent px-4 py-2 text-white outline outline-1 hover:bg-gray-800"
            >
              Clear Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* Category Filters */}
          <div className="col-span-12 px-5 pb-5 lg:col-span-3">
            <div className="mb-4 flex flex-col gap-3">
              <h2 className="pb-2 text-lg font-medium">Filter by Category</h2>
              {categories.map((category) => (
                <label key={category} className="mr-4 inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryFilter(category)}
                    className="form-checkbox h-5 w-5 text-blue-500"
                  />
                  <span className="ml-2 capitalize text-white">{category}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:col-span-9 lg:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Products;
