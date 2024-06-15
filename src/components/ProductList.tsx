import { Product } from "../interfaces/Product";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </>
  );
};

export default ProductList;
