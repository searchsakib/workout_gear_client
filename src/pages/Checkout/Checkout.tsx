import Container from "@/components/ui/Container";
import { checkout, decreaseStock } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  const [userDetails, setUserDetails] = useState<{
    name: string;
    email: string;
    phone: string;
    address: string;
  }>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    try {
      const cartItemsCopy = [...cartItems];
      const outOfStockItems = cartItemsCopy.filter(
        (item) => item.quantity > item.product.stock,
      );

      if (outOfStockItems.length > 0) {
        const itemNames = outOfStockItems
          .map((item) => item.product.name)
          .join(", ");
        throw new Error(`The following items are out of stock: ${itemNames}`);
      }

      cartItemsCopy.forEach((item) => {
        dispatch(
          decreaseStock({
            productId: item.product._id,
            quantity: item.quantity,
          }),
        );
      });

      dispatch(checkout());

      navigate("/success-page", {
        state: { userDetails, cartItems: cartItemsCopy },
      });
    } catch (error) {
      console.error("Error during checkout:", error);
      alert(
        error instanceof Error
          ? error.message
          : "An error occurred during checkout. Please try again.",
      );
    }
  };

  const handlePlaceOrder = () => {
    // Reduce stock for each product in the cart
    cartItems.forEach((item: any) => {
      dispatch(
        decreaseStock({
          productId: item?.product?._id,
          quantity: item?.quantity,
        }),
      );
    });
  };

  return (
    <Container>
      <div className="container mx-auto p-4">
        <h1 className="mb-4 text-2xl font-bold">Checkout</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userDetails.name}
              onChange={handleInputChange}
              required
              className="w-full rounded border p-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userDetails.email}
              onChange={handleInputChange}
              required
              className="w-full rounded border p-2"
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1 block">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={userDetails.phone}
              onChange={handleInputChange}
              required
              className="w-full rounded border p-2"
            />
          </div>
          <div>
            <label htmlFor="address" className="mb-1 block">
              Delivery Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={userDetails.address}
              onChange={handleInputChange}
              required
              className="w-full rounded border p-2"
            />
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold">Payment Method</h2>
            <p>Cash on Delivery</p>
          </div>
          <button
            type="submit"
            onClick={handlePlaceOrder}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Place Order
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Checkout;
