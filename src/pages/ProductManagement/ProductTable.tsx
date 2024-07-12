import ProductRow from "./ProductRow";

interface ProductTableProps {
  products: any[];
  onDelete: (id: string) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, onDelete }) => {
  return (
    <table className="min-w-full border border-gray-200 bg-white">
      <thead className="bg-[#1a1a2e] text-white">
        <tr>
          <th className="border-b px-4 py-2">Name</th>
          <th className="border-b px-4 py-2">Price</th>
          <th className="border-b px-4 py-2">Category</th>
          <th className="border-b px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-[#1a1a2e] text-white">
        {products.map((product) => (
          <ProductRow key={product._id} product={product} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
