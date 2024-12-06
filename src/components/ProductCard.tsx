import { CircleMinus, CirclePlus, ShoppingCart } from "lucide-react";

import imgProduct from "../assets/images/image-brownie-mobile.jpg";

export function ProductCard() {
  const active = false;

  return (
    <div>
      <div
        className={`flex h-52 overflow-hidden rounded-lg border-2 xl:h-60 ${active ? "border-red" : "border-transparent"}`}
      >
        <img src={imgProduct} alt="" className="flex-1 object-cover" />
      </div>
      <div className="-mt-5 flex flex-col">
        {active ? (
          <div className="mb-4 flex w-40 items-center justify-between gap-2 self-center rounded-full bg-red px-3 py-2 text-base">
            <button className="fill-transparent text-rose-50 hover:fill-rose-50 hover:text-red">
              <CircleMinus size={20} fill="true" />
            </button>
            <span className="font-semibold text-rose-50">4</span>
            <button className="fill-transparent text-rose-50 hover:fill-rose-50 hover:text-red">
              <CirclePlus size={20} fill="true" />
            </button>
          </div>
        ) : (
          <button className="mb-4 flex w-40 items-center justify-center gap-2 self-center rounded-full border border-rose-400 bg-rose-50 px-5 py-2 text-base font-semibold text-rose-900 hover:border-red hover:text-red">
            <ShoppingCart className="h-5 w-5 text-red" />
            Add to Cart
          </button>
        )}
        <div className="flex flex-col">
          <span className="text-base text-rose-400">waffle</span>
          <span className="text-lg font-semibold text-rose-900">
            Waffle with berries
          </span>
          <span className="text-lg font-semibold text-red">$0.00</span>
        </div>
      </div>
    </div>
  );
}
