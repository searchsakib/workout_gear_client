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
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          required
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input
          required
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          required
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Images
        </label>
        <input
          required
          type="text"
          name="images"
          value={formData.images}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          required
          name="category"
          value={formData.category}
          onChange={handleCategoryChange}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2"
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Stock</label>
        <input
          required
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2"
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md bg-gray-300 px-4 py-2"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-blue-500 px-4 py-2 text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
