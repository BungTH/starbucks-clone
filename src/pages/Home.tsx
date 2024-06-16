import { useState } from "react";
import Filter from "../components/Filter";
import HeroBanner from "../components/HeroBanner";
import ProductList from "../components/ProductList";
import { Product } from "../interfaces/Product";
import { Grid } from "@mui/material";

const Home = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  return (
    <>
      <HeroBanner />
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6} sm={3}>
          <Filter setFilteredProducts={setFilteredProducts} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ProductList products={filteredProducts} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
