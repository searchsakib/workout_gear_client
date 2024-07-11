import { useGetProductsQuery } from "@/redux/api/baseApi";
import Container from "../ui/Container";
import { TData } from "@/types";

const FeaturedProducts = () => {
  // From Server
  const { data: products, isLoading, isError } = useGetProductsQuery(undefined);

  if (isError) return <div>Error</div>;

  return (
    <Container>
      <h2 className="pb-8 pt-16 text-center text-5xl font-bold">
        Featured Products
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
              className="overflow-hidden rounded-lg border border-gray-700 bg-gray-800 shadow-lg"
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
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default FeaturedProducts;
