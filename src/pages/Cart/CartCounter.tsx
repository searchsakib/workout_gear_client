import { useAppSelector } from "@/redux/hooks";

const CartCounter: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce(
    (total: any, item: any) => total + item.quantity,
    0,
  );

  return (
    <p id="itemCount" className="relative top-2">
      {itemCount}
    </p>
  );
};

export default CartCounter;
