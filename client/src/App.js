import "./App.css";
import Header from "./components/Header/Header";
import "./bootstrap.min.css";
import MainScreen from "./components/MainScreen";
import Product from "./screens/Product/Product";
import LastProducts from "./screens/LastProducts/LastProducts";

import { BrowserRouter, Route } from "react-router-dom";
const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route path="/" component={MainScreen} exact />
      <Route path="/product/:id" component={Product} />
      <Route path="/lastproducts" component={LastProducts} />
    </main>
  </BrowserRouter>
);

export default App;
