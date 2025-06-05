import React, { useContext } from "react";
import { CartContext } from "./CartProvider";
import { Link } from "react-router";

export default function Cart() {
  const cartContext = useContext(CartContext);

  return (
    <div>
      <h1>Cart </h1>

      {cartContext.cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <table>
          <tbody>
            {cartContext.cart.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price}</td>

                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button className="btn" onClick={() => cartContext.clearCart()}>
        Clear Cart
      </button>

      <hr />
      <Link to="/store">Back to Store</Link>
    </div>
  );
}
