import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import app from "./firebaseCredential";
import App from "./App.jsx";
import "./index.css";
import ProductsProvider from "./context/Products.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>
          <App />
          <ToastContainer />
        </ProductsProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
