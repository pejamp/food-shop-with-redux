import emptyImage from "./assets/images/illustration-empty-cart.svg";
import { ItemCart } from "./components/ItemCart";
import { ProductCard } from "./components/ProductCard";
import "./global.css";

function App() {
  const isEmptyCart = false;

  return (
    <div className="min-h-screen bg-rose-100 px-6 py-8 xl:pt-20">
      <div className="xl:m-auto xl:flex xl:max-w-[1216px] xl:items-start xl:gap-8">
        <main className="mb-8 sm:mb-10 lg:mb-14 xl:max-w-[800px]">
          <h1 className="mb-8 text-3xl font-bold text-rose-900 sm:text-4xl">
            Desserts
          </h1>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
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
        <aside className="m-auto flex w-full flex-col rounded-lg bg-rose-50 p-6 sm:max-w-xl xl:m-0 xl:max-w-96">
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
              <div className="my-6 flex items-center justify-between">
                <span className="text-base text-gray-800">Order Total</span>
                <span className="text-2xl font-bold text-rose-900">$00.00</span>
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

export default App;
