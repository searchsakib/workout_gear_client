import React, { useState } from "react";

interface ProductFormProps {
  onSubmit: (product: any) => void;
  product?: any;
  onCancel: () => void;
}

type TFormData = {
  name: string;
  price: number;
  description: string;
  images: string;
  category: string;
  stock: number;
};

const categories = [
  "weights",
  "fitness",
  "hydration",
  "cardio",
  "accessories",
  "treadmills",
];

const ProductForm: React.FC<ProductFormProps> = ({
  onSubmit,
  product,
  onCancel,
}) => {
  const initialFormData: TFormData = product || {
    name: "",
    price: 1,
    description: "",
    images: "",
    category: "",
    stock: 1,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prevState) => ({ ...prevState, category: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Convert price and stock to numbers
    const formDataWithNumbers = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
    };
    onSubmit(formDataWithNumbers);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-white">
      <div className="text-lg text-white">
        <label className="block font-medium text-gray-200">Name</label>
        <input
          required
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-slate-800 p-2"
        />
      </div>
      <div className="text-lg text-white">
        <label className="block font-medium text-gray-200">Price</label>
        <input
          required
          step="any"
          type="number"
          name="price"
          min="1"
          value={formData.price}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-slate-800 p-2"
        />
      </div>
      <div className="text-lg text-white">
        <label className="block font-medium text-gray-200">Description</label>
        <textarea
          required
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-slate-800 p-2"
        />
      </div>
      <div className="text-lg text-white">
        <label className="block font-medium text-gray-200">Images</label>
        <input
          required
          type="text"
          name="images"
          value={formData.images}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-slate-800 p-2"
        />
      </div>
      <div className="text-lg text-white">
        <label className="block font-medium text-gray-200">Category</label>
        <select
          required
          name="category"
          value={formData.category}
          onChange={handleCategoryChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-slate-800 p-2"
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="text-lg text-white">
        <label className="block font-medium text-gray-200">Stock</label>
        <input
          required
          type="number"
          name="stock"
          min="1"
          value={formData.stock}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border bg-slate-800 p-2"
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="btn rounded-md bg-rose-700 px-4 py-2 text-white hover:outline hover:outline-1"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-sky-800 px-4 py-2 text-white hover:bg-sky-950 hover:outline hover:outline-1"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
