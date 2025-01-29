# Food Shop

A web application for managing food products, built with React, Redux, and TypeScript. The project is powered by Vite for fast development and utilizes Tailwind CSS for styling.

---

## 🚀 Installation

```sh
Clone the repository:
git clone https://github.com/pejamp/food-shop-with-redux
cd food-shop-with-redux

Install dependencies:
npm install

Run:
npm run dev
```

## 📌 Usage

The application runs in the browser at http://localhost:5173/ (default Vite port).
The backend mock API is powered by json-server and can be started with:

```sh
npm run server
```

## ✨ Features

- [React](https://react.dev/)
- [Redux](https://redux.js.org/introduction/getting-started)
- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)
- [json-server](https://github.com/typicode/json-server)
- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/)

## 🛠 Development

The provided code includes two main Redux slices:

**Product Management** (productSlice.ts)

This slice is responsible for storing and fetching products from the backend. It uses createAsyncThunk to handle asynchronous API requests.

- **Initial State** (ProductState):
  - items: List of products.
  - isLoading: Indicates whether the products are being loaded.
- **Asynchronous Action** (loadProducts):
  - Makes a GET request to /products using axios.
  - Updates the state with the retrieved products.
- **Reducers** (extraReducers):
  - pending: Sets isLoading to true while fetching data.
  - fulfilled: Updates items with the fetched products and sets isLoading to false.

**Cart Management** (cartSlice.ts)

This slice manages the shopping cart, allowing users to add, remove, and update product quantities.

- **Initial State** (CartState):
  - items: List of products in the cart.
  - isEmpty: Indicates whether the cart is empty.
- **Reducers**:
  - addToCart: Adds an item to the cart and marks it as selected.
  - removeFromCart: Removes an item from the cart and sets isEmpty = true if the cart is empty.
  - incrementQuantity: Increases the quantity of an item in the cart.
  - decrementQuantity: Decreases the quantity or removes the item if it reaches 1.
