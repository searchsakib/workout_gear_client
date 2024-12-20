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
import Container from "@/components/ui/Container";
import { Helmet } from "react-helmet-async";
import { RootState } from "@/redux/store";
import useBeforeUnload from "@/hooks/useBeforeUnload";

const ProductManagement: React.FC = () => {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  useBeforeUnload(cartItems);
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
          confirmButtonColor: "#1e609e",
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
          confirmButtonColor: "#1e609e",
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
      confirmButtonColor: "#1e609e",
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
              confirmButtonColor: "#1e609e",
            });
          }
        });
      }
    });
  };

  return (
    <Container>
      <Helmet>
        <title>Workout Gear | Product Management</title>
      </Helmet>
      <div className="container mx-auto pb-20 pt-8 text-black">
        <h1 className="mb-10 text-center text-4xl font-bold text-white">
          Product Management
        </h1>
        {isLoading && (
          <div className="p-3 text-center">
            <span className="loading loading-ball loading-lg text-white"></span>
          </div>
        )}
        {error && <div>Error...</div>}

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
        <div className="flex flex-col items-center">
          <div className="mb-6 flex w-full justify-end">
            <button
              onClick={() => setIsAdding(true)}
              className="rounded-md bg-[#1a1a2e] px-4 py-2 font-semibold text-white outline outline-1 hover:bg-white hover:text-[#1a1a2e]"
            >
              Add New Product
            </button>
          </div>
          <div className="min-w-full">
            <ProductTable
              products={products?.data || []}
              onDelete={handleDeleteProduct}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductManagement;
