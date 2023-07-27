import { IProduct } from "../../../model";

interface InfoProductProps {
  details: boolean;
  product: IProduct;
}

const InfoProduct = ({ details, product }: InfoProductProps) => {
  return (
    <>
      {details && (
        <div>
          <p>{product.description}</p>
          <p>
            Rate:
            {product.rating ? <span>{product?.rating?.rate}</span> : " none"}
          </p>
        </div>
      )}
    </>
  );
};
export default InfoProduct;
