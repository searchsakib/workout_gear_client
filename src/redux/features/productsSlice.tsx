import { TinitialState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TinitialState = {
  data: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});
