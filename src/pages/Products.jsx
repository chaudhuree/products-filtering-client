import MasterLayout from "../layout/MasterLayout";
import { useState, useEffect } from "react";
import { useProducts } from "../context/Products";
import Product from "../components/Product";
import { Helmet } from "react-helmet";
import Spinner from "../components/Spinner";
export default function Products() {
  const {
    search,
    setSearch,
    products,
    loading,
    pages,
    currentPage,
    handlePaginationButton,
    numberOfPages,
    totalPages,
  } = useProducts();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target[0].value);
  };
  return (
    <MasterLayout>
      <Helmet>
        <title>Products</title>
      </Helmet>
      {loading ? (
        <div className=" min-h-screen w-full flex justify-center items-center"> <span className="loading loading-dots loading-lg"></span></div>
      ) : (
        <>
          {/*search bar*/}
          <div className="max-w-2xl mx-auto">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <form className="relative" onSubmit={handleSearch}>
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Milk, Bread, Eggs, etc.."
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </form>
          </div>
          <section>
            <h1 className="text-3xl max-md:tex-2xl max-sm:text-xl my-3 font-bold text-center">
              Products
            </h1>
            <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-2">
              {products?.products?.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
          </section>

          {/* Pagination Section starts */}

          {totalPages > 0 ? (
            <div className="flex justify-center mt-12 mb-5">
              {/* Previous Button */}
              <button
                disabled={currentPage === 1}
                onClick={() => handlePaginationButton(currentPage - 1)}
                className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white"
              >
                <div className="flex items-center -mx-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-1 rtl:-scale-x-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                  </svg>

                  <span className="mx-1">previous</span>
                </div>
              </button>
              {/* Numbers */}
              {pages.map((btnNum) => (
                <button
                  onClick={() => handlePaginationButton(btnNum)}
                  key={btnNum}
                  className={`hidden ${
                    currentPage === btnNum ? "bg-blue-500 text-white" : ""
                  } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
                >
                  {btnNum}
                </button>
              ))}
              {/* Next Button */}
              <button
                disabled={currentPage === numberOfPages}
                onClick={() => handlePaginationButton(currentPage + 1)}
                className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
              >
                <div className="flex items-center -mx-1">
                  <span className="mx-1">Next</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-1 rtl:-scale-x-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </button>
            </div>
          ) : (
            ""
          )}

          {/*pagination section ends*/}
        </>
      )}
    </MasterLayout>
  );
}
