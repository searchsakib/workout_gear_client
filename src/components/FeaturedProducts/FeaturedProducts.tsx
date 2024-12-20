import { useGetProductsQuery } from "@/redux/api/baseApi";
import Container from "../ui/Container";
import { TProduct } from "@/types";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const FeaturedProducts = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const { data: products, isLoading, isError } = useGetProductsQuery(undefined);

  if (isError) return <div>Error</div>;

  return (
    <Container>
      <div className="pb-5">
        <h2
          data-aos="fade-right"
          className="pb-8 pt-16 text-center text-5xl font-bold"
        >
          Featured Gears
        </h2>
        {isLoading ? (
          <div className="p-3 text-center">
            <span className="loading loading-ball loading-lg"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products?.data?.slice(0, 4).map((product: TProduct) => (
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
                    to={`/products/details/${product._id}`}
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
            to="/products"
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
