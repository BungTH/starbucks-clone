import { useState, useEffect } from "react";
import {
  FormControl,
  Grid,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import {
  Caffeine,
  Categories,
  Product,
  RoastLevels,
} from "../interfaces/Product";

interface FilterProps {
  products: Product[];
  setFilteredProducts: (products: Product[]) => void;
}

const Filter = ({ products, setFilteredProducts }: FilterProps) => {
  const [selectedCategory, setSelectedCategory] = useState<Categories[]>([]);
  const [selectedRoastLevel, setSelectedRoastLevel] = useState<RoastLevels[]>(
    [],
  );
  const [selectedCaffeine, setSelectedCaffeine] = useState<Caffeine[]>([]);

  useEffect(() => {
    const applyFilters = () => {
      const filteredData = products.filter((item) => {
        return (
          (selectedCategory.length === 0 ||
            selectedCategory.includes(item.category)) &&
          (selectedRoastLevel.length === 0 ||
            selectedRoastLevel.includes(item.roast_level)) &&
          (selectedCaffeine.length === 0 ||
            selectedCaffeine.includes(item.caffeine))
        );
      });

      setFilteredProducts(filteredData);
    };

    applyFilters();
  }, [
    selectedCategory,
    selectedRoastLevel,
    selectedCaffeine,
    products,
    setFilteredProducts,
  ]);

  const handleCategoryChange = (category: Categories) => {
    setSelectedCategory((prevCategory) =>
      prevCategory.includes(category)
        ? prevCategory.filter((c) => c !== category)
        : [...prevCategory, category],
    );
  };

  const handleRoastLevelChange = (roastLevels: RoastLevels) => {
    setSelectedRoastLevel((prevRoastLevels) =>
      prevRoastLevels.includes(roastLevels)
        ? prevRoastLevels.filter((c) => c !== roastLevels)
        : [...prevRoastLevels, roastLevels],
    );
  };

  const handleCaffeineChange = (caffeine: Caffeine) => {
    setSelectedCaffeine((prevCaffeine) =>
      prevCaffeine.includes(caffeine)
        ? prevCaffeine.filter((c) => c !== caffeine)
        : [...prevCaffeine, caffeine],
    );
  };

  return (
    <Grid>
      <Typography variant="h5">Filters</Typography>
      <Grid item xs={12} md={3}>
        <Typography variant="h6">Categories</Typography>
        <FormControl>
          {Object.values(Categories).map((category) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedCategory.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  name={category}
                  color="primary"
                />
              }
              label={category}
              key={category}
            />
          ))}
        </FormControl>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography variant="h6">Roast</Typography>
        <FormControl>
          {Object.values(RoastLevels).map((roastLevels) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedRoastLevel.includes(roastLevels)}
                  onChange={() => handleRoastLevelChange(roastLevels)}
                  name={roastLevels}
                  color="primary"
                />
              }
              label={roastLevels}
              key={roastLevels}
            />
          ))}
        </FormControl>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography variant="h6">Caffeine</Typography>
        <FormControl>
          {Object.values(Caffeine).map((caffeine) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedCaffeine.includes(caffeine)}
                  onChange={() => handleCaffeineChange(caffeine)}
                  name={caffeine}
                  color="primary"
                />
              }
              label={caffeine}
              key={caffeine}
            />
          ))}
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Filter;
