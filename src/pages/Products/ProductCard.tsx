import { TProduct } from "@/types";

interface ProductCardProps {
  product: TProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="rounded-md bg-white p-4 shadow-md">
      <img
        src={product?.images}
        alt={product?.name}
        className="mb-4 h-40 w-full rounded-md object-cover"
      />
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">{product?.name}</h2>
        <span className="text-gray-600">${product?.price.toFixed(2)}</span>
      </div>
      <p className="text-gray-600">{product?.description}</p>
      <div className="mt-4 flex justify-end">
        <button className="rounded-md bg-blue-500 px-4 py-2 text-white">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
