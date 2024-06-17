import { useEffect, useState } from "react";
import {
  Box,
  Chip,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Pagination,
  Typography,
} from "@mui/material";
import { Product } from "../interfaces/Product";
import { useNavigate } from "react-router-dom";

interface ProductListProps {
  products: Product[];
}

const itemsPerPage = 12;

const ProductList = ({ products }: ProductListProps) => {
  const [page, setPage] = useState(1);

  //reset pagination to page 1 when filter is applied
  useEffect(() => {
    setPage(1);
  }, [products]);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const navigate = useNavigate();

  const navigateToProduct = (productId: string) => {
    navigate(`/products/${productId}`);
  };

  return (
    <>
      {products.length > 0 ? (
        <>
          <ImageList cols={3} gap={8}>
            {products
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((product) => (
                <ImageListItem key={product.id} sx={{ cursor: "pointer" }}>
                  <img
                    srcSet={`${product.image_url[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${product.image_url[0]}?w=248&fit=crop&auto=format`}
                    alt={product.name}
                    loading="lazy"
                    onClick={() => navigateToProduct(product.id.toString())}
                  />
                  <ImageListItemBar
                    title={product.name}
                    subtitle={
                      <>
                        <Chip
                          label={product.category}
                          size="small"
                          sx={{ bgcolor: "black", color: "white" }}
                        />
                        <br />
                        <Typography variant="body2" sx={{ marginTop: "20px" }}>
                          <span>Price: {product.price}</span>
                        </Typography>
                      </>
                    }
                    position="below"
                    onClick={() => navigateToProduct(product.id.toString())}
                  />
                </ImageListItem>
              ))}
          </ImageList>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Pagination
              count={Math.ceil(products.length / itemsPerPage)}
              page={page}
              onChange={handleChange}
            />
          </Box>
        </>
      ) : (
        <Typography variant="h6" align="center">
          There's no product you're looking for, or run "json-server --watch
          db.json" in terminal
        </Typography>
      )}
    </>
  );
};

export default ProductList;
