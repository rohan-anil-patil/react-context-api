import React from "react";
import { useProduct } from "../../Context/ProductContext";

function ProductDisplay() {
  const { data, addCart } = useProduct();

  return (
    <div className="grid grid-cols-2 gap-8 p-20 ">
      {data.map((item) => {
        return (
          <div
            className="card hover:scale-110 w-72 min-h-96 border-solid border-2  rounded-lg bg-slate-100 flex flex-col items-center justify-around"
            key={item.id}
          >
            <img
              className="w-60 h-60 rounded-t-lg"
              src={item.img}
              alt={item.name}
            />
            <div className="flex flex-col items-center justify-around bg-amber-100 w-full basis-1/2 rounded-lg">
              <h2 className="font-bold text-lg ">{item.name}</h2>
              <p>₹ {item.price}</p>

              <button
                className="w-36 h-10 rounded-full bg-amber-300"
                onClick={() => addCart(item)}
              >
                Add Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductDisplay;
