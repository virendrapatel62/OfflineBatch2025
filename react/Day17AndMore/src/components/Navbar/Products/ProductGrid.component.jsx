import React from "react";
import styles from "./ProductGrid.module.css";
import ProductCard from "./ProductCard.component";
export default function ProductGrid(props) {
  const { products } = props;

  console.log(products);

  return (
    <div className={styles.products}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
