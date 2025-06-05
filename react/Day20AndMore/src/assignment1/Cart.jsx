import styles from "./style.module.css";

function Cart({ cart, onRemoveFromCart }) {
  console.log(cart);
  return (
    <div className={styles.border}>
      <h3>Cart {cart.length}</h3>
      {cart.map((item) => (
        <div key={item.product.id} className={styles.border}>
          <div>
            {item.product.name} : {item.quantity}{" "}
            <button onClick={() => onRemoveFromCart(item.product)}>❌</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
