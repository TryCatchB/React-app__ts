import { useState } from "react";
import { IProduct } from "../../../model";
import InfoProduct from "./InfoProduct";

interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  const [details, setDetails] = useState(false);
  const changeDetails = () => setDetails((prev) => !prev);

  const btnBgClassName = details ? "bg-blue-400" : "bg-yellow-400";
  const btnClasses = ["py-2 px-4 border", btnBgClassName];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} alt={product.title} className="w-1/6" />

      <p>{product.title}</p>

      <span className="font-bold">{product.price}</span>

      <button onClick={changeDetails} className={btnClasses.join(" ")}>
        {details ? "Hide details" : "Show details"}
      </button>

      <InfoProduct details={details} product={product} />
    </div>
  );
};

export default Product;
