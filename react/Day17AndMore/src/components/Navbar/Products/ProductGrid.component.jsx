import React from "react";
import styles from "./ProductGrid.module.css";
export default function ProductGrid(props) {
  const { products } = props;

  console.log(products);

  return (
    <div className={styles.products}>
      {products.map((product) => (
        <div className={styles.product} key={product.id}>
          <div>
            <img src={product.thumbnail} alt={product.title} />
            <h2 title={product.title}>{product.title?.substring(0, 10)}...</h2>
            <p title={product.description}>
              {product.description?.substring(0, 50)}...
            </p>
            <p title={product.price}>{product.price}</p>
          </div>
          <button className={styles.addToCart}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
