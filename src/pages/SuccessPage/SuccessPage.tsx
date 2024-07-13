import React from "react";
import { useLocation, Link } from "react-router-dom";

const SuccessPage: React.FC = () => {
  const location = useLocation();
  const { userDetails, cartItems } = location.state as {
    userDetails: any;
    cartItems: any[];
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Order Confirmation</h1>
      <p>Thank you for your order, {userDetails.name}!</p>
      <p>We'll deliver your items to: {userDetails.address}</p>
      <h2 className="mb-2 mt-4 text-xl font-semibold">Order Summary</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.product._id}>
            {item.product.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <Link to="/" className="mt-4 block text-blue-500 hover:underline">
        Return to Home
      </Link>
    </div>
  );
};

export default SuccessPage;
