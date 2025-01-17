import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import emptyImage from "../assets/images/illustration-empty-cart.svg";
import { ItemCart } from "../components/ItemCart";
import { ProductCard } from "../components/ProductCard";
import { removeFromCart } from "../features/slices/cart";
import { loadProducts } from "../features/slices/product";

export function Home() {
  const dispatch = useAppDispatch();

  const { products, cartItems, isLoading, isEmptyCart } = useAppSelector(
    (state) => {
      return {
        products: state.products.items,
        cartItems: state.cart.items,
        isLoading: state.products.isLoading,
        isEmptyCart: state.cart.isEmpty,
      };
    }
  );

  const orderTotal = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <div className="min-h-screen bg-rose-100 px-6 py-8 xl:pt-20">
      <div className="xl:m-auto xl:flex xl:max-w-[1216px] xl:items-start xl:gap-8">
        <main className="mb-8 w-full sm:mb-10 lg:mb-14 xl:max-w-[800px]">
          <h1 className="mb-8 text-3xl font-bold text-rose-900 sm:text-4xl">
            Desserts
          </h1>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {products.map((product) => (
                <li key={product.id}>
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    category={product.category}
                  />
                </li>
              ))}
            </ul>
          )}
        </main>
        <aside className="m-auto flex w-full flex-col rounded-lg bg-rose-50 p-6 sm:max-w-xl xl:m-0 xl:max-w-96">
          <h2 className="text-2xl font-bold text-red">Your Cart (7)</h2>
          {isEmptyCart ? (
            <div className="mt-4 flex flex-col items-center gap-4">
              <img src={emptyImage} alt="" />
              <p className="text-sm font-semibold text-rose-500">
                Your added items will appear here
              </p>
            </div>
          ) : (
            <>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <ItemCart
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                      onRemove={() => dispatch(removeFromCart({ id: item.id }))}
                    />
                  </li>
                ))}
              </ul>
              <div className="my-6 flex items-center justify-between">
                <span className="text-base text-gray-800">Order Total</span>
                <span className="text-2xl font-bold text-rose-900">
                  ${orderTotal.toFixed(2)}
                </span>
              </div>
              <button className="w-full rounded-full bg-red p-3 text-center text-base font-semibold text-rose-50 hover:brightness-75">
                Confirm Order
              </button>
            </>
          )}
        </aside>
      </div>
    </div>
  );
}
