import Container from "@/components/ui/Container";
import { useGetProductByIdQuery } from "@/redux/api/baseApi";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, error } = useGetProductByIdQuery(id);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = () => {
    if (product?.data) {
      dispatch(addToCart({ product: product.data, quantity }));
    }
  };

  const inCart = cartItems.find((item) => item.product._id === id);
  const maxQuantity = product?.data
    ? product.data.stock - (inCart?.quantity || 0)
    : 0;

  if (isLoading)
    return (
      <div className="min-h-screen p-3 text-center">
        <span className="loading loading-ball loading-lg text-white"></span>
      </div>
    );
  if (error) return <div>Error </div>;

  return (
    <Container>
      <div className="min-h-screen py-10">
        <div className="flex flex-wrap">
          <div className="w-full px-4 pb-5 md:w-1/2 md:pb-0">
            <img
              src={product?.data?.images}
              alt={product?.data?.name}
              className="w-full"
            />
          </div>
          <div className="w-full px-4 md:w-1/2">
            <h1 className="mb-4 text-3xl font-bold capitalize">
              {product?.data?.name}
            </h1>
            <p className="mb-2 text-xl capitalize text-gray-200">
              ${product?.data?.price}
            </p>
            <p className="mb-4 capitalize text-gray-100">
              Stock: {product?.data?.stock}
            </p>
            <p className="mb-4 text-gray-200">{product?.data?.description}</p>
            <p className="mb-4 capitalize text-gray-100">
              Category: {product?.data?.category}
            </p>
            <div className="mb-4">
              <label
                htmlFor="quantity"
                className="mb-2 block text-sm font-medium text-gray-200"
              >
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                min="1"
                max={maxQuantity}
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.min(maxQuantity, Number(e.target.value)))
                }
                className="w-14 rounded-md border border-gray-300 bg-gray-200 p-2 text-black"
              />
            </div>
            <button
              onClick={handleAddToCart}
              disabled={quantity > maxQuantity || maxQuantity === 0}
              className="rounded bg-blue-600 px-4 py-2 text-white disabled:bg-gray-400"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
