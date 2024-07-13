import { TProduct } from "@/types";

interface ProductCardProps {
  product: TProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card rounded-md bg-transparent p-4 shadow-md outline outline-1">
      <img
        src={product?.images}
        alt={product?.name}
        className="mb-4 h-40 w-full rounded-md object-cover"
      />
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-100">{product?.name}</h2>
        <span className="text-gray-300">${product?.price.toFixed(2)}</span>
      </div>
      <p className="flex-1 text-gray-300">{product?.description}</p>
      <div className="mt-4 flex justify-end">
        <button className="font-base rounded-md px-4 py-2 text-white outline outline-1 hover:bg-slate-200 hover:font-medium hover:text-[#1a1a2e]">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
