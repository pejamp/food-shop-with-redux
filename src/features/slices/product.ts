import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../lib/axios";

interface Product {
  id: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  price: number;
  category: string;
}

export interface ProductState {
  items: Product[];
  isLoading: boolean;
}

const initialState: ProductState = {
  items: [],
  isLoading: false,
}

export const loadProducts = createAsyncThunk(
  "product/load",
  async () => {
    const response = await api.get('/products')

    return response.data
  }
)

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadProducts.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(loadProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    })
  }
})

export const productReducer = productSlice.reducer;

