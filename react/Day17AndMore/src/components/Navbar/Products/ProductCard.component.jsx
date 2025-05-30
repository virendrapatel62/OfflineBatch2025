import React from "react";
import styles from "./ProductGrid.module.css";
import { Link } from "react-router";
export default function ProductCard(props) {
  const { product } = props;
  return (
    <Link className={styles.productLink} to={`/product/${product.id}`}>
      <div className={styles.product} key={product.id}>
        <div>
          <img src={product.image} alt={product.title} />
          <h2 title={product.title}>{product.title?.substring(0, 10)}...</h2>
          <p title={product.description}>
            {product.description?.substring(0, 50)}...
          </p>
          <p title={product.price}>{product.price} $</p>
        </div>

        {/* /product/1 */}
        {/* /product/2 */}

        <button className={styles.addToCart}>Add to cart</button>
      </div>
    </Link>
  );
}
