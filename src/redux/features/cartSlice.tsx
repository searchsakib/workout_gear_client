import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "@/types";

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
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(
        (item) => item.product._id === action.payload,
      );
      if (item && item.quantity < item.product.stock) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(
        (item) => item.product._id === action.payload,
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.product._id !== action.payload,
      );
    },
    checkout: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  checkout,
} = cartSlice.actions;
export default cartSlice.reducer;
