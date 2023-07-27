import { useEffect, useState } from "react";
import { IProduct } from "../model";
import { AxiosError } from "axios";
import Service from "../services/service";

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const addItem = (item: IProduct) => {
    setProducts((prev) => [...prev, item]);
  };

  async function fetchProducts() {
    try {
      setError("");
      setLoading(true);
      const data = await Service.getAll("https://fakestoreapi.com/products", 5);
      setProducts(data);
      setLoading(false);
    } catch (error: unknown) {
      const e = error as AxiosError;
      setLoading(false);
      setError(e.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error, addItem };
};
