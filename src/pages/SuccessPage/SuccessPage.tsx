import { Link } from "react-router-dom";

const Success: React.FC = () => {
  return (
    <div className="container mx-auto min-h-screen w-full max-w-screen-xl px-3 py-8 md:px-6">
      <h1 className="mb-12 text-center text-3xl font-bold">Order Successful</h1>
      <p className="text-center text-lg">
        Your order has been placed successfully. Thank you for shopping with us!
      </p>
      <div className="mt-6 text-center">
        <Link to="/products" className="text-blue-400">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Success;
