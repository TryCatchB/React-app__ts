import { Route, Routes } from "react-router-dom";
import ProductsPage from "../productsPage/ProductsPage";
import AboutPage from "../aboutPage/AboutPage";
import Navigate from "./navigate/Navigate";

function App() {
  return (
    <>
      <Navigate />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
