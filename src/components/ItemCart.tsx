import { CircleX } from "lucide-react";

interface ItemProps {
  name: string;
  quantity: number;
  price: number;
  onRemove: () => void;
}

export function ItemCart({ name, price, quantity, onRemove }: ItemProps) {
  const total = price * quantity;

  return (
    <div className="flex items-center justify-between gap-1 border-b py-5">
      <div>
        <span className="mb-1 inline-block font-semibold capitalize text-rose-900">
          {name}
        </span>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-red">{quantity}x</span>
          <span className="text-rose-400">@ ${price.toFixed(2)}</span>
          <span className="font-bold text-rose-400">${total.toFixed(2)}</span>
        </div>
      </div>
      <button onClick={onRemove} className="text-rose-400 hover:text-rose-900">
        <CircleX size={20} />
      </button>
    </div>
  );
}
