import { CircleX } from "lucide-react";

export function ItemCart() {
  return (
    <div className="flex items-center justify-between gap-1 border-b py-5">
      <div>
        <span className="mb-1 inline-block font-semibold capitalize text-rose-900">
          classic tiramisu
        </span>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-red">1x</span>
          <span className="text-rose-400">@ $0.00</span>
          <span className="font-bold text-rose-400">$0.00</span>
        </div>
      </div>
      <button className="text-rose-400 hover:text-rose-900">
        <CircleX size={20} />
      </button>
    </div>
  );
}
