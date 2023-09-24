import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Cart() {
    let cartItems = localStorage.getItem("Cart_Items")
        ? JSON.parse(localStorage.getItem("Cart_Items"))
        : [];
    // const itemsList = cartItems.map((item, index) => (
    // <div key={index}>
    //     <p>Item title: {item.title}</p>
    //     <p>Item Price: {item.price}</p>
    // </div>
    const itemsList = (
        <ul className="grid grid-cols-2">
            {cartItems.map((product) => (
                <li
                    key={product.id}
                    className="p-10 m-5 border-2 relative  rounded-lg"
                >
                    <img
                        src={product.image}
                        alt=""
                        className="max-w-full h-[150px] m-auto"
                    />

                    <br />
                    <div className="text-2xl font-bold text-center">
                        {product.price} $
                    </div>
                    <button className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full mt-5 m-auto w-fit">
                        Check Out
                    </button>
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            <h1 className="text-start text-3xl font-bold">Your Cart</h1>
            <div>
                <div>
                    <span>Your Wallet :</span>
                    <i className="Money">1000$</i>
                </div>
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
            {itemsList}
        </div>
    );
}
