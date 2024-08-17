import { createContext, useContext, useEffect, useState } from "react";
export const ProductsContext = createContext();
export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [priceRange, setPriceRange] = useState([0, 4]);

  // all variables and functions that you want to share with the rest of the application should be placed in the context
  const contextValue = {
    products,
    loading,
    search,
    setSearch,
    brand,
    setBrand,
    category,
    setCategory,
    sort,
    setSort,
    priceRange,
    setPriceRange,
  };
console.log('contextValue', contextValue);

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => {
  return useContext(ProductsContext);
};
