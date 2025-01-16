import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Payment() {
  const [active, setActive] = useState("hidden");
  return (
    <div className="basis-3/5 h-max">
      <div className="flex w-max gap-6 items-center pl-10 pt-5">
        <div>
          <input
            type="radio"
            name="cod"
            id="cod"
            onClick={() => setActive("hidden")}
          />
          <span>Cash on delivery</span>
        </div>
        <div>
          <input
            type="radio"
            name="cod"
            id="cod"
            onClick={() => setActive("inline")}
          />
          <span>Credit Card </span>
        </div>
      </div>
      <div className={active}>
        <div className="cod h-80 w-96 ml-48 mt-10 bg-gray-100">
          <div className="flex flex-col items-center justify-center pt-6">
            <label htmlFor="number" className="font-bold ">
              Enter Your Card Number
            </label>
            <br />
            <input
              type="tel"
              name="number"
              id="number"
              placeholder="Card Number"
              className="border-2 border-solid border-black rounded-full pl-3"
            />
            <br />
            <label htmlFor="number" className="font-bold ">
              Enter Your Card Number
            </label>
            <br />
            <input
              type="date"
              name="Date"
              id="Date"
              placeholder="Expiry Date"
              className="border-2 border-solid border-black rounded-full px-7"
            />
            <br />
            <label htmlFor="number" className="font-bold">
              Enter Your CVV
            </label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              maxLength={3}
              placeholder="CVV"
              className="border-2 border-solid border-black rounded-full pl-3"
            />
            <br />
          </div>
        </div>
      </div>
      <br />
      <Link
        to="/"
        className=" bg-amber-300 rounded-full p-2 ml-80 "
        onClick={() => alert("Thank you for Payment")}
      >
        Confirm Payment
      </Link>
    </div>
  );
}

export default Payment;
