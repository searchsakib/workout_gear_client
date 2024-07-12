import {
  useAddProductsMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
} from "@/redux/api/baseApi";
import { setSelectedProduct } from "@/redux/features/productsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManagement: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: products, isLoading, error } = useGetProductsQuery(null);
  const [addProduct] = useAddProductsMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const selectedProduct = useAppSelector(
    (state: any) => state.products.selectedProduct,
  );
  const [isAdding, setIsAdding] = useState(false);

  const handleAddProduct = async (product: any) => {
    await addProduct(product);
    setIsAdding(false);
  };

  const handleUpdateProduct = async (product: any) => {
    await updateProduct({ id: selectedProduct?._id, ...product });
    dispatch(setSelectedProduct(null));
  };

  const handleDeleteProduct = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(id);
    }
  };

  return (
    <div className="container mx-auto p-8 text-black">
      <h1 className="mb-6 text-2xl font-bold">Product Management</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error...</div>}
      <div className="mb-6 flex justify-end">
        <button
          onClick={() => setIsAdding(true)}
          className="rounded-md bg-green-500 px-4 py-2 text-white"
        >
          Add New Product
        </button>
      </div>
      <div className="mb-6">
        {isAdding && (
          <ProductForm
            onSubmit={handleAddProduct}
            onCancel={() => setIsAdding(false)}
          />
        )}
        {selectedProduct && (
          <ProductForm
            product={selectedProduct}
            onSubmit={handleUpdateProduct}
            onCancel={() => dispatch(setSelectedProduct(null))}
          />
        )}
      </div>
      <ProductTable
        products={products?.data || []}
        onDelete={handleDeleteProduct}
      />
    </div>
  );
};

export default ProductManagement;
