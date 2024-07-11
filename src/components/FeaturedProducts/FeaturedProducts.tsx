import { useGetProductsQuery } from "@/redux/api/baseApi";
import Container from "../ui/Container";
import { TData } from "@/types";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation

const FeaturedProducts = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery(undefined);

  if (isError) return <div>Error</div>;

  return (
    <Container>
      <div className="pb-5">
        <h2 className="pb-8 pt-16 text-center text-5xl font-bold">
          Featured Gears
        </h2>
        {isLoading ? (
          <div className="p-3 text-center">
            <span className="loading loading-ball loading-lg"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products?.data?.slice(0, 4).map((product: TData) => (
              <div
                key={product._id}
                className="relative overflow-hidden rounded-lg border border-gray-700 bg-gray-800 shadow-lg"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.images})` }}
                ></div>
                <div className="p-4">
                  <h2 className="mb-2 text-xl font-bold text-gray-100">
                    {product.name}
                  </h2>
                  <p className="text-lg text-gray-300">${product.price}</p>
                </div>
                <div className="absolute bottom-0 right-0 p-4">
                  <Link
                    to={`/products/${product._id}`} // Replace with your actual product details page URL
                    className="btn-xs rounded bg-transparent px-4 py-2 font-bold text-white outline outline-1 hover:bg-gray-100 hover:text-[#1e2054]"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="mt-3 flex justify-center">
          <Link
            to="/products" // Replace with your actual products page URL
            className="btn btn-square btn-wide bg-gray-800 px-6 py-3 text-base font-bold text-white outline outline-1 hover:bg-gray-100 hover:text-[#1e2054]"
          >
            Explore More
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default FeaturedProducts;
