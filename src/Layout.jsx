import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Pricing from "./Components/Pricing/Pricing";
import { useState } from "react";
import Data from "./Data.json";
import { ProductProvider } from "./Context/ProductContext";
function Layout() {
  const [data, setData] = useState(Data);
  const [cart, setCart] = useState([]);


  const addCart = (item) => {
    const productInCart = cart.find((product) => {
      return product.id === item.id;
    });
    if (!productInCart) {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  const handleIncrement = (id) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecrement = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((product) =>
          product.id === id
            ? { ...product, quantity: Math.max(product.quantity - 1, 0) }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  };

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  return (
    <ProductProvider
      value={{
        data,
        addCart,
        cart,
        handleDecrement,
        handleIncrement,
        totalPrice,
      }}
    >
      <Navbar />
      <div className="hero w-full mt-20 h-max flex">
        <div className="basis-3/5 h-max">
          <Outlet />
        </div>
        <div className="basis-2/5 sticky top-40 mt-20 max-h-96 min-h-96 bg-slate-200 rounded-lg overflow-y-auto">
          <Pricing />
        </div>
      </div>
    </ProductProvider>
  );
}

export default Layout;
