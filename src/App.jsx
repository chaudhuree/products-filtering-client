import Products from "./pages/Products";
import {  Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
export default function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </>
  );
}
