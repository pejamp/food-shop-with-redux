import { Provider as ReduxProvider } from "react-redux";

import { store } from "./app/store";
import "./global.css";
import { Home } from "./pages/Home";

function App() {
  return (
    <ReduxProvider store={store}>
      <Home />
    </ReduxProvider>
  );
}

export default App;
