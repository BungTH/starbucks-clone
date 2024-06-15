import { useState } from "react";
import Filter from "../components/Filter";
import HeroBanner from "../components/HeroBanner";
import ProductList from "../components/ProductList";
import { Product } from "../interfaces/Product";

const Home = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  return (
    <>
      <HeroBanner />
      <Filter setFilteredProducts={setFilteredProducts} />
      <ProductList products={filteredProducts} />
    </>
  );
};

export default Home;
