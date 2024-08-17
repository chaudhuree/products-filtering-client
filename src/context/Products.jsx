import { createContext, useContext, useEffect, useState } from "react";
export const ProductsContext = createContext();
export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");


  // all variables and functions that you want to share with the rest of the application should be placed in the context
  const contextValue = {
    products,
    loading,
    search,
    setSearch,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => {
  return useContext(ProductsContext);
};
