import { CircleMinus, CirclePlus, ShoppingCart } from "lucide-react";

import imgProduct from "../assets/images/image-brownie-mobile.jpg";

export function ProductCard() {
  const active = true;

  return (
    <div>
      <div
        className={`h-52 overflow-hidden rounded-lg border-2 ${active ? "border-red" : "border-transparent"}`}
      >
        <img src={imgProduct} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="-mt-5 flex flex-col">
        {active ? (
          <div className="mb-4 flex w-40 items-center justify-between gap-2 self-center rounded-full bg-red px-3 py-2 text-base text-rose-50">
            <button>
              <CircleMinus size={20} />
            </button>
            <span className="font-semibold">4</span>
            <button>
              <CirclePlus size={20} />
            </button>
          </div>
        ) : (
          <button className="mb-4 flex w-40 items-center justify-center gap-2 self-center rounded-full border border-rose-400 bg-rose-50 px-5 py-2 text-base font-semibold text-rose-900 hover:bg-rose-100">
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
