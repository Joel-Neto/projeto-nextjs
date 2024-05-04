import { ProductInterface } from "@/services/products";
import { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";

type CartContextType = {
  cart: ProductInterface[];
  addProduct: (product: ProductInterface) => void;
  removeProduct: (id: number) => void;
};

const cartContext = createContext<CartContextType>({} as CartContextType);

export const CartContextProvider = (props: { children?: ReactNode }) => {
  const [cart, setCart] = useState<ProductInterface[]>([]);

  useEffect(() => {
    const cartFromLocalStorage = localStorage.getItem("cart");

    if (cartFromLocalStorage) {
      setCart(JSON.parse(cartFromLocalStorage));
    }
  }, []);

  const addProduct = (product: ProductInterface) => {
    const updatedCart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const removeProduct = (id: number) => {
    const productIndex = cart.findIndex((product) => product.id === id);

    if (productIndex !== -1) {
      let updatedCart = [...cart];
      updatedCart.splice(productIndex, 1);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    }
  };

  return (
    <cartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {props.children}
    </cartContext.Provider>
  );
};

export const useCart = () => useContext(cartContext);
