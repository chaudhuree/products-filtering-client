import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";
export const ProductsContext = createContext();
export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 20]);

  

  // call fetchProducts when the component mounts
  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/products?search=${search}&brand=${brand}&category=${category}&sort=${sort}&page=${page}&priceRange=${priceRange[0]}-${priceRange[1]}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
      console.log('products', products);
      

  }, [search, brand, category, sort, page, priceRange]);

  console.log("products", products);

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
    page,
    setPage,
    totalPages,
  };
  // console.log('contextValue', contextValue);

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => {
  return useContext(ProductsContext);
};
