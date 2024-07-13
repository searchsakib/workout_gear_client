import {
  checkout,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  const handleIncreaseQuantity = (productId: string) => {
    const item = cartItems.find((item) => item.product._id === productId);
    if (item && item.quantity < item.product.stock) {
      dispatch(increaseQuantity(productId));
    }
  };

  const handleDecreaseQuantity = (productId: string) => {
    const item = cartItems.find((item) => item.product._id === productId);
    if (item && item.quantity > 1) {
      dispatch(decreaseQuantity(productId));
    }
  };

  const handleRemoveFromCart = (productId: string) => {
    if (
      window.confirm("Are you sure you want to remove this item from the cart?")
    ) {
      dispatch(removeFromCart(productId));
    }
  };

  const handleCheckout = () => {
    dispatch(checkout());
    alert(
      "Order placed successfully. Quantity has been deducted from product stock.",
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  return (
    <div className="container mx-auto min-h-screen w-full max-w-screen-xl px-3 py-8 md:px-6">
      <h1 className="mb-12 text-center text-3xl font-bold">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="pt-10 text-center text-2xl">
          Your cart is empty.{" "}
          <Link to="/products" className="text-blue-400">
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 md:pr-4">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.product._id}
                  className="flex items-center justify-between rounded-md bg-transparent p-4 text-white shadow-md outline outline-1"
                >
                  <div className="flex items-center">
                    <img
                      src={item.product.images}
                      alt={item.product.name}
                      className="h-20 w-20 rounded-md object-cover"
                    />
                    <div className="ml-4">
                      <h2 className="text-xl font-bold">{item.product.name}</h2>
                      <p className="text-gray-200">${item.product.price}</p>
                      <p className="text-gray-200">
                        Stock: {item.product.stock}
                      </p>
                      <p className="text-gray-200">
                        Category: {item.product.category}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleDecreaseQuantity(item.product._id)}
                      className="rounded bg-gray-300 px-2 py-1 text-gray-700"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => handleIncreaseQuantity(item.product._id)}
                      className="rounded bg-gray-300 px-2 py-1 text-gray-700"
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleRemoveFromCart(item.product._id)}
                      className="ml-4 rounded bg-red-700 px-4 py-2 text-white hover:bg-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 md:pl-4">
            <div className="rounded-md p-4 text-white shadow-md outline outline-1">
              <h2 className="mb-4 text-xl font-bold">Order Summary</h2>
              <div className="mb-2 flex justify-between">
                <span>Total:</span>
                <span className="font-bold">${totalPrice.toFixed(2)}</span>
              </div>
              <Link to="/checkout">
                <button className="w-full rounded bg-green-700 px-4 py-2 text-white hover:bg-green-800">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
