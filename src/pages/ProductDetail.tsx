import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../interfaces/Product";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Tabs,
  Tab,
  Chip,
} from "@mui/material";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>();
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Product[] = await response.json();
        const product = data.find(
          (product) => Number(product.id) === Number(id),
        );
        setProduct(product);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (_event: unknown, newValue: number) => {
    setSelectedTab(newValue);
  };

  const Circle = ({ filled }: { filled: boolean }) => (
    <div
      style={{
        height: "20px",
        width: "20px",
        borderRadius: "50%",
        display: "inline-block",
        backgroundColor: filled ? "green" : "grey",
        margin: "5px",
      }}
    />
  );

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Grid sx={{ marginTop: "64px" }}>
      <Typography variant="h4" component="h1">
        {product.name}
      </Typography>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        {product.image_url.map((_image, index) => (
          <Tab key={index} label={`Image ${index + 1}`} />
        ))}
      </Tabs>
      {product.image_url.map((image, index) => (
        <Card key={index} hidden={selectedTab !== index}>
          <img
            srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${image}?w=248&fit=crop&auto=format`}
            alt={product.name}
            loading="lazy"
          />
        </Card>
      ))}
      <CardContent>
        <Chip
          label={product.category}
          size="small"
          sx={{ bgcolor: "black", color: "white" }}
        />
        <Typography variant="body2" color="textSecondary" component="p">
          Dev Note: Pictures and details of the product is not the same, it's my
          fault that I didn't include the correct details. I'm sorry for the
          inconvenience. The actual data will be in the db.json file.
        </Typography>
        <br />
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
        <Typography variant="h6" component="p">
          Coffee Profile
        </Typography>
        <Grid>
          <Typography variant="body2" component="p">
            Acidity:
            {[...Array(5)].map((_, i) => (
              <Circle filled={i < product.acidity} />
            ))}
          </Typography>
          <Typography variant="body2" component="p">
            Body:
            {[...Array(5)].map((_, i) => (
              <Circle filled={i < product.body} />
            ))}
          </Typography>
          <Typography variant="body2" component="p">
            Processing Method: {product.processing_method}
          </Typography>
          <Typography variant="body2" component="p">
            Tasting Notes: {product.tasting_note.join(", ")}
          </Typography>
          <Typography variant="body2" component="p">
            Complimentary Flavors: {product.complementary_flavors.join(", ")}
          </Typography>
          <Typography variant="body2" component="p">
            Region: {product.region}
          </Typography>
        </Grid>
        <Typography variant="h6" component="p">
          Price: {product.price}
        </Typography>
      </CardContent>
    </Grid>
  );
};

export default ProductDetail;
