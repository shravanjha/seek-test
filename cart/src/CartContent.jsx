import React, { useState, useEffect } from "react";

import { cart, clearCart } from "cart/cart";
import { currency } from "home/products";

export default function CartContent() {
  const [items, setItems] = useState([]);

  useEffect(
    () => cart.subscribe((value) => setItems(value?.cartItems ?? [])),
    []
  );

  return (
    <>
      <div className="my-10 grid grid-cols-6 gap-5">
        <div><b>Qty</b></div>
        <div><b>Image</b></div>
        <div><b>Subscription</b></div>
        <div className="text-right"><b>Cost</b></div>
        <div className="text-right"><b>Discount</b></div>
        <div className="text-right"><b>SubTotal</b></div>
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <div>{item.quantity}</div>
            <img src={item.image} alt={item.name} className="max-h-6" />
            <div>{item.name}</div>
            <div className="text-right">
              {currency.format(item.quantity * item.price)}
            </div>
            <div className="text-right">
              -{currency.format(item.discount)}
            </div>
            <div className="text-right">
              {currency.format((item.quantity * item.price) - item.discount)}
            </div>
          </React.Fragment>
        ))}
        <div><b>Grand Total</b></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="text-right" id="grand_total">
          <b>
            {currency.format(items.reduce((a, v) => a + (v.quantity * v.price) - v.discount, 0))}
          </b>
        </div>
      </div>
      {items.length > 0 && (
        <div className="flex mb-10">
          <div className="flex-grow">
            <button
              id="clearcart"
              className="bg-white border border-green-800 text-green-800 py-2 px-5 rounded-md text-sm"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
          <div className="flex-end">
            <button
              className="bg-green-900 text-white py-2 px-5 rounded-md text-sm"
              onClick={clearCart}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
}
