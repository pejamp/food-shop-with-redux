import { CircleMinus, CirclePlus, ShoppingCart } from "lucide-react";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../features/slices/cart";

interface IProductCard {
  id: number;
  name: string;
  price: number;
  category: string;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export function ProductCard({
  name,
  image,
  category,
  price,
  id,
}: IProductCard) {
  const dispatch = useAppDispatch();

  const { itemQuantity, isProductSelected } = useAppSelector((state) => {
    return {
      itemQuantity: state.cart.items.find((item) => item.id === id)?.quantity,
      isProductSelected: state.cart.items.find((item) => item.id === id)
        ?.isSelected,
    };
  });

  function handleAddToCart() {
    dispatch(
      addToCart({
        id,
        name,
        price,
        quantity: 1,
      })
    );
  }

  function handleRemoveFromCart() {
    dispatch(decrementQuantity({ id }));
  }

  function handleIncrementQuantity() {
    dispatch(incrementQuantity({ id }));
  }

  return (
    <div>
      <div
        data-active={isProductSelected}
        className="flex h-52 overflow-hidden rounded-lg border-2 border-transparent data-[active=true]:border-red xl:h-60"
      >
        <picture>
          <source srcSet={image.desktop} media="(min-width: 1024px)" />
          <source srcSet={image.tablet} media="(min-width: 768px)" />
          <source srcSet={image.mobile} media="(max-width: 767px)" />
          <img
            src={image.thumbnail}
            alt={name}
            className="flex-1 object-cover"
          />
        </picture>
      </div>
      <div className="-mt-5 flex flex-col">
        {isProductSelected ? (
          <div className="mb-4 flex w-40 items-center justify-between gap-2 self-center rounded-full border border-transparent bg-red px-3 py-2 text-base">
            <button
              onClick={handleRemoveFromCart}
              className="fill-transparent text-rose-50 hover:fill-rose-50 hover:text-red"
            >
              <CircleMinus size={20} fill="true" />
            </button>
            <span className="font-semibold text-rose-50">{itemQuantity}</span>
            <button
              onClick={handleIncrementQuantity}
              className="fill-transparent text-rose-50 hover:fill-rose-50 hover:text-red"
            >
              <CirclePlus size={20} fill="true" />
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="mb-4 flex w-40 items-center justify-center gap-2 self-center rounded-full border border-rose-400 bg-rose-50 px-5 py-2 text-base font-semibold text-rose-900 hover:border-red hover:text-red"
          >
            <ShoppingCart className="h-5 w-5 text-red" />
            Add to Cart
          </button>
        )}
        <div className="flex flex-col">
          <span className="text-base text-rose-400">{category}</span>
          <span className="text-lg font-semibold text-rose-900">{name}</span>
          <span className="text-lg font-semibold text-red">
            ${price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
