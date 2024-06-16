import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import HeroBanner from "../components/HeroBanner";
import ProductList from "../components/ProductList";
import { Product } from "../interfaces/Product";
import { Grid } from "@mui/material";
import Search from "../components/Search";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/products"); // If can't retrieve data, run "json-server --watch db.json" in terminal
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Product[] = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const searchedAndFilteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredProducts(searchedAndFilteredProducts);
  }, [products, searchTerm]);

  return (
    <>
      <HeroBanner />
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6} sm={3}>
          <Filter products={products} setFilteredProducts={setFilteredProducts} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <ProductList products={filteredProducts} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
