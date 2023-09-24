import { Outlet, Link } from "react-router-dom";
// import { CartCounter, setCartCounter } from "./cart";
import React, { useState,useEffect } from "react";

export function SideBar() {
    // console.log(localStorage.getItem("Cart_Items").length);
    console.log(JSON.parse(localStorage.getItem("Cart_Items")));
    console.log(JSON.parse(localStorage.getItem("Cart_Items")).length);
  // console.log(localStorage.getItem("Cart_Items"));
      const [counter, setCounter] = useState(0);

      // Use useEffect to update the counter when the component mounts
      useEffect(() => {
          // Get the items from localStorage
          const cartItemsJSON = localStorage.getItem("Cart_Items");

          if (cartItemsJSON) {
              // Parse the JSON string into an array
              const cartItems = JSON.parse(cartItemsJSON);

              // Update the counter with the length of the array
              setCounter(cartItems.length);
          }
      }, []);
    return (
        <div
            className="bg-gray-600 rounded-lg  fixed  ml-3"
            style={{ minHeight: "calc(100vh - 34px)", width: "300px" }}
        >
            <div className="flex items-center flex-col	">
                <img src="/public/AOS.png" alt="" style={{ width: "195px" }} />
            </div>
            <div className="text-white text-2xl font-bold text-center mb-5">
                <Link to="/home">Home</Link>
            </div>
            <div className="text-white text-2xl font-bold  text-center mb-5">
                <Link to="/shop">Shop</Link>
            </div>
            <div className="text-white text-2xl font-bold  text-center">
                <Link to="/cart" className="relative">
                    Cart
                    <span
                        className="rounded-full w-8 h-8 m-4 p-2 bg-white text-slate-950 absolute flex items-center justify-center left-10 "
                        style={{ top: "-12px" }}
                    >
                        {/* {JSON.parse(localStorage.getItem("Cart_Items")).length} */}
                        {counter}
                    </span>
                </Link>
            </div>
        </div>
    );
}
export let cartItems = [];
export default function Root() {
    return (
        <div className="relative">
            <SideBar />
            <div className="flex justify-end gap-10  my-4 ">
                <div
                    className="  rounded-lg "
                    style={{
                        flexBasis: "70%",
                        minHeight: "calc(100vh - 34px)",
                    }}
                >
                    <div className="bg-gray-600 h-20 w-100 rounded-lg"></div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}
