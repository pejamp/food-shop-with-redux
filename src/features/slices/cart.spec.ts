import { configureStore } from '@reduxjs/toolkit';
import { describe, expect, it } from 'vitest';
import { addToCart, cartReducer, decrementQuantity, incrementQuantity, removeFromCart } from './cart';

describe('cart slice', () => {
  it('should add a new item to cart', () => {
    const store = configureStore({ reducer: { cart: cartReducer } })
    const newItem = { id: 1, name: 'Product 1', price: 100, quantity: 1, isSelected: true }

    store.dispatch(addToCart(newItem))

    expect(store.getState().cart.items).toEqual([{ ...newItem, isSelected: true }]);
    expect(store.getState().cart.isEmpty).toBe(false)
  });

  it('should remove an item from the cart', () => {
    const initialState = {
      items: [{ id: 1, name: 'Item 1', price: 50, quantity: 1 }, { id: 2, name: 'Item 2', price: 75, quantity: 1 }],
      isEmpty: false,
    };
    const store = cartReducer(initialState, removeFromCart({ id: 1 }))

    expect(store.items).toEqual([{ id: 2, name: 'Item 2', price: 75, quantity: 1 }]);
    expect(store.isEmpty).toBe(false);
  });

  it('should increment the quantity of an item in the cart', () => {
    const initialState = {
      items: [{ id: 1, name: 'Item 1', price: 50, quantity: 2 }],
      isEmpty: false,
    };
    const store = cartReducer(initialState, incrementQuantity({ id: 1 }))

    expect(store.items).toEqual([{ id: 1, name: 'Item 1', price: 50, quantity: 3 }]);
  });

  it('should decrement the quantity of an item in the cart', () => {
    const initialState = {
      items: [{ id: 1, name: 'Item 1', price: 50, quantity: 2 }],
      isEmpty: false,
    };
    const store = cartReducer(initialState, decrementQuantity({ id: 1 }))

    expect(store.items).toEqual([{ id: 1, name: 'Item 1', price: 50, quantity: 1 }]);
  });

  it('should remove the item from the cart if quantity reaches 1', () => {
    const initialState = {
      items: [{ id: 1, name: 'Item 1', price: 50, quantity: 1 }],
      isEmpty: false,
    };
    const store = cartReducer(initialState, decrementQuantity({ id: 1 }))

    expect(store.items).toEqual([]);
    expect(store.isEmpty).toBe(true);
  })
})