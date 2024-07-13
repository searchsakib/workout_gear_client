import { TProduct } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CartItem = {
  product: TProduct;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ product: TProduct; quantity: number }>,
    ) => {
      const existingItem = state.items.find(
        (item) => item.product._id === action.payload.product._id,
      );
      if (existingItem) {
        existingItem.quantity = Math.min(
          existingItem.quantity + action.payload.quantity,
          existingItem.product.stock,
        );
      } else {
        state.items.push({
          product: action.payload.product,
          quantity: action.payload.quantity,
        });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
