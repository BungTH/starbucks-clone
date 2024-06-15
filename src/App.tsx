import Navigation from "./components/Navigation";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";

const App = () => {
  return (
    <>
      <Navigation />
      <ProductList />
      <ProductDetail />
    </>
  );
};

export default App;
