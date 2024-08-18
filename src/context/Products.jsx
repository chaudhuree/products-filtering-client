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
  const [totalPages, setTotalPages] = useState(0);
  const [priceRange, setPriceRange] = useState([0,20]);
  const [currentPage, setCurrentPage] = useState(1)

  const productionUrl="https://products-filtering-b798.onrender.com/api/v1"
  const productionUrlVercel="https://products-filtering-server.vercel.app/api/v1"
  const developmentUrl="http://localhost:3000/api/v1"

  // call fetchProducts when the component mounts
  useEffect(() => {
    setLoading(true);
    fetch(`${productionUrl}/products?search=${search}&brand=${brand}&category=${category}&sort=${sort}&page=${currentPage}&priceRange=${priceRange[0]}-${priceRange[1]}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setTotalPages(data.total)
      }).finally(() => {
        setLoading(false);
      });
      

  }, [search, brand, category, sort, currentPage, priceRange]);


  // pagination related codes

  // calculate page number
  const numberOfPages = Math.ceil(totalPages / 6)
  const pages = [...Array(numberOfPages).keys()].map(element => element + 1)
  //  handle pagination button
  const handlePaginationButton = value => {
    setCurrentPage(value)
  }

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
    totalPages,
    handlePaginationButton,
    pages,
    currentPage,
    setCurrentPage,
    numberOfPages
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
