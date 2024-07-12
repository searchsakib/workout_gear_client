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
import Swal from "sweetalert2";

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

  const handleAddProduct = (product: any) => {
    addProduct(product).then((res) => {
      setIsAdding(false);
      console.log(res.data);
      if (res?.data?.success) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          color: "#fff",
          iconColor: "#fff",
          background: "#09335c",
          confirmButtonColor: "#3085d6",
          title: `Product added Successfully!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleUpdateProduct = (product: any) => {
    updateProduct({ id: selectedProduct?._id, ...product }).then((res) => {
      dispatch(setSelectedProduct(null));
      console.log(res.data);
      if (res?.data?.success) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          color: "#fff",
          iconColor: "#fff",
          background: "#09335c",
          confirmButtonColor: "#3085d6",
          title: `Product Updated Successfully!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteProduct = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      color: "#fff",
      iconColor: "#fff",
      background: "#09335c",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id).then((res: any) => {
          console.log(res);
          if (res?.data?.success) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Product has been deleted.",
              icon: "success",
              color: "#fff",
              iconColor: "#fff",
              background: "#09335c",
              confirmButtonColor: "#3085d6",
            });
          }
        });
      }
    });
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
