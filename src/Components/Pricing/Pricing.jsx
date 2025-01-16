import React from "react";
import { useProduct } from "../../Context/ProductContext";
import { Link } from "react-router-dom";
import { useState } from "react";

function Pricing() {
  const { cart, handleIncrement, handleDecrement, totalPrice } = useProduct();
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h2 className="font-bold text-xl py-5 pl-2">Cart</h2>
      {cart.map((item) => (
        <div
          key={item.id}
          className="cart-item flex items-center justify-around"
        >
          <img className="w-16 h-16" src={item.img} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="bg-amber-300 px-1 rounded-lg"
              onClick={() => handleIncrement(item.id)}
            >
              +
            </button>
            <p>{item.quantity}</p>
            <button
              className="bg-amber-300 px-1.5 rounded-lg"
              onClick={() => handleDecrement(item.id)}
            >
              -
            </button>
          </div>
        </div>
      ))}
      <p className=" text-center font-bold text-xl">Total: ₹ {totalPrice}</p>
      <div className="w-max m-auto">
        {toggle == false ? (
          <Link
            to="/payment"
            className=" bg-amber-300 rounded-full p-2 sticky right-44 mt-5 text-xs"
            onClick={() => setToggle(true)}
          >
            Proceed to Payment
          </Link>
        ) : (
          <Link
            to="/"
            className=" bg-amber-300 rounded-full p-2 sticky right-44 mt-5 text-xs"
            onClick={() => setToggle(false)}
          >
            Go Back to Shopping
          </Link>
        )}
      </div>
    </div>
  );
}

export default Pricing;
