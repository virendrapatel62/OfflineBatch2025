import styles from "./style.module.css";

export default function Products({ products, onAddToCart }) {
  return (
    <div className={styles.border}>
      <h3>Products</h3>
      {products.map((product) => (
        <div key={product.id} className={styles.border}>
          <div>
            {product.name} : {product.price}{" "}
            <button onClick={() => onAddToCart(product)}>➕</button>
          </div>
        </div>
      ))}
    </div>
  );
}
