import React, { useContext } from "react";
import { Link } from "react-router";
import { ProductContext } from "./ProductProvider";
import { CartContext } from "./CartProvider";

export default function Store() {
  const products = useContext(ProductContext);
  const cartContext = useContext(CartContext);

  console.log(cartContext);

  return (
    <div>
      <div className="header">
        <h1>Store Page</h1>
        <div className="flex">
          <Link to="/cart">
            Cart <span className="cartCount">{cartContext.cart.length}</span>
          </Link>
        </div>
      </div>

      <div className="main">
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product">
              <img
                src={product.image}
                width={100}
                height={100}
                alt={product.title}
              />
              <h2>{product.title}</h2>
              <button
                className="btn"
                onClick={() => cartContext.addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
