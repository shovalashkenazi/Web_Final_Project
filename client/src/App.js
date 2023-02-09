import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import "./fb/fb-service";
import { getAuth } from "firebase/auth";
import { ProductsContextProvider } from "./context/product-context";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register.jsx";
import { fetcher } from "./utils/fetcher";
import { Admin } from "./pages/Admin";
// test
//test 2
function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    getAuth().onAuthStateChanged(async (user) => {
      if (user) {
        const { isAdmin } = await fetcher("/users/is-admin/");
        setUser({ ...user, isAdmin });
      } else {
        setUser();
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <ProductsContextProvider>
        <Header user={user} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="/admin" element={<Admin user={user} />} />
          <Route path="/store" element={<OurStore />} />
          <Route path="/store/:categoryId" element={<OurStore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </ProductsContextProvider>
    </BrowserRouter>
  );
}

export default App;