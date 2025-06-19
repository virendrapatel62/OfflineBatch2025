import React from "react";
import styles from "./home.module.css";
import { productsListingStore } from "../../stores/products-listing.store";
import { useRecoilState, useRecoilValue } from "recoil";
import { Link } from "react-router";
import { authStore } from "../../stores/auth.store";
import { useNavigate, useLocation } from "react-router";
import { useEffect } from "react";

export default function HomePage() {
  const [storeData, setStoreData] = useRecoilState(productsListingStore);
  const navigate = useNavigate();

  const location = useLocation();

  const { user, token, isAuthenticated } = useRecoilValue(authStore);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  return (
    <div className={styles.container}>
      <h1>Dukan</h1>

      <div className={styles.products}>
        {storeData.products?.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className={styles.product}
          >
            <img src={product.image} alt={product.name} />

            <div className={styles.productInfo}>
              <div className={styles.productName}>{product.name}</div>
              <div className={styles.productPrice}>
                ₹ {product.price}/{product.unit}
              </div>
              <div>{product.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
