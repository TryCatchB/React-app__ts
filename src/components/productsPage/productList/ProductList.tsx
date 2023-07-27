import { IProduct } from "../../../model";
import Product from "../product/Product";

interface ProductListProps {
  products: IProduct[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      {products.map((product: IProduct) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductList;
