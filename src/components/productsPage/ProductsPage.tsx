import { useContext } from "react";
import { useProducts } from "../../hooks/useProducts";
import { IProduct } from "../../model";
import Loader from "../ui/Loader";
import Error from "../ui/Error";
import Product from "../home/product/Product";
import Modal from "../ui/Modal";
import CreateItem from "../ui/CreateItem";
import { ModalContext } from "../../context/modalContext";

const ProductsPage = () => {
  const { products, loading, error, addItem } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (item: IProduct) => {
    close();
    addItem(item);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <Loader loading={loading} />
      <Error error={error} />
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      {modal && (
        <Modal title="Create new item" onClose={close}>
          <CreateItem onCreate={createHandler} />
        </Modal>
      )}
      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
        onClick={open}
      >
        Open modal
      </button>
    </div>
  );
};

export default ProductsPage;
