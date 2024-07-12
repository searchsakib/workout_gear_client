import { TProduct, TinitialState } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: TinitialState = {
  selectedProduct: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<TProduct | null>) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setSelectedProduct } = productsSlice.actions;

export default productsSlice.reducer;
