import emptyImage from "./assets/images/illustration-empty-cart.svg";
import { ItemCart } from "./components/ItemCart";
import { ProductCard } from "./components/ProductCard";
import "./global.css";

function App() {
  const isEmptyCart = true;

  return (
    <div className="bg-rose-100 px-6 py-8">
      <div>
        <main className="mb-8">
          <h1 className="mb-8 text-3xl font-bold text-rose-900">Desserts</h1>
          <ul className="flex flex-col gap-4">
            <li>
              <ProductCard />
            </li>
            <li>
              <ProductCard />
            </li>
            <li>
              <ProductCard />
            </li>
            <li>
              <ProductCard />
            </li>
          </ul>
        </main>
        <aside className="flex flex-col gap-6 rounded-lg bg-rose-50 p-6">
          <h2 className="text-2xl font-bold text-red">Your Cart (7)</h2>
          {isEmptyCart ? (
            <div className="flex flex-col items-center gap-4">
              <img src={emptyImage} alt="" />
              <p className="text-sm font-semibold text-rose-500">
                Your added items will appear here
              </p>
            </div>
          ) : (
            <>
              <ul>
                <li>
                  <ItemCart />
                </li>
                <li>
                  <ItemCart />
                </li>
                <li>
                  <ItemCart />
                </li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-base text-gray-800">Order Total</span>
                <span className="text-2xl font-bold text-rose-900">$00.00</span>
              </div>
              <button className="w-full rounded-full bg-red p-3 text-center text-base font-semibold text-rose-50">
                Confirm Order
              </button>
            </>
          )}
        </aside>
      </div>
    </div>
  );
}

export default App;
