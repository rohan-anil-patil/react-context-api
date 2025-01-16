import { createContext, useContext } from "react";

export const ProductContext = createContext({});

export const useProduct = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ProductContext.Provider;
