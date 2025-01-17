import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  isSelected?: boolean;
}

interface CartState {
  items: CartItem[];
  isEmpty: boolean;
}

const initialState: CartState = {
  items: [],
  isEmpty: true,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      state.items.push(action.payload)
      state.isEmpty = false;
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            isSelected: true,
          }
        }
        return item;
      })

    },
    removeFromCart(state, action: PayloadAction<{ id: number }>) {
      state.items = state.items.filter((item) => item.id !== action.payload.id)

      if (state.items.length === 0) {
        state.isEmpty = true;
      }
    },
    incrementQuantity(state, action: PayloadAction<{ id: number }>) {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }
        return item
      })
    },
    decrementQuantity(state, action: PayloadAction<{ id: number }>) {
      const stateQuantity = state.items.find((item) => item.id === action.payload.id)?.quantity

      if (stateQuantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload.id)
      } else {
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            }
          }
          return item
        })
      }

      if (state.items.length === 0) {
        state.isEmpty = true;
      }
    }
  }
})

export const cartReducer = cartSlice.reducer;

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;