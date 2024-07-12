import { setSelectedProduct } from "@/redux/features/productsSlice";
import { useAppDispatch } from "@/redux/hooks";

interface ProductRowProps {
  product: any;
  onDelete: (id: string) => void;
}

const ProductRow: React.FC<ProductRowProps> = ({ product, onDelete }) => {
  const dispatch = useAppDispatch();

  return (
    <tr key={product._id}>
      <td className="border-b px-4 py-2">{product.name}</td>
      <td className="border-b px-4 py-2">${product.price}</td>
      <td className="border-b px-4 py-2">{product.category}</td>
      <td className="space-x-2 border-b px-4 py-2">
        <button
          onClick={() => dispatch(setSelectedProduct(product))}
          className="rounded-md bg-yellow-500 px-4 py-2 text-white"
        >
          Update
        </button>
        <button
          onClick={() => onDelete(product._id)}
          className="rounded-md bg-red-500 px-4 py-2 text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
