import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../features/slices/cart";
import { productReducer } from "../features/slices/product";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch