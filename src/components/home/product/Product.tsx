import { useState } from "react";
import { IProduct } from "../../../model";

interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  const [details, setDetails] = useState(false);

  const btnBgClassName = details ? "bg-blue-400" : "bg-yellow-400";

  const btnClasses = ["py-2 px-4 border", btnBgClassName];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} alt={product.title} className="w-1/6" />
      <p>{product.title}</p>
      <span className="font-bold">{product.price}</span>

      <button
        onClick={() => setDetails((prev) => !prev)}
        className={btnClasses.join(" ")}
      >
        {details ? "Hide details" : "Show details"}
      </button>

      {details && (
        <div>
          <p>{product.description}</p>
          <p>
            Rate:
            {product.rating ? (
              <span style={{ fontWeight: "bold" }}>
                {product?.rating?.rate}
              </span>
            ) : (
              " none"
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default Product;
