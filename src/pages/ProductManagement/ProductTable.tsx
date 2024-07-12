import ProductRow from "./ProductRow";

interface ProductTableProps {
  products: any[];
  onDelete: (id: string) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, onDelete }) => {
  return (
    <div>
      <table className="border border-gray-200">
        <thead className="bg-[#1a1a2e] text-white">
          <tr className="border border-b">
            <th className="px-6 py-3 text-left font-medium">Name</th>
            <th className="px-6 py-3 text-left font-medium">Price</th>
            <th className="px-6 py-3 text-left font-medium">Category</th>
            <th className="px-6 py-3 text-center font-medium">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-[#1a1a2e] text-white">
          {products.map((product) => (
            <ProductRow
              key={product._id}
              product={product}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
