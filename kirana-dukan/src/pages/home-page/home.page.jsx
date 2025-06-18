import React, { useEffect } from "react";
import styles from "./home.module.css";
import axios from "axios";
import { productsListingStore } from "../../stores/products-listing.store";
import { dukanStore } from "../../stores/dukan.store";
import { useRecoilState } from "recoil";
import { Link } from "react-router";

const url =
  "https://raw.githubusercontent.com/virendrapatel62/OfflineBatch2025/refs/heads/main/data/products.json";
export default function HomePage() {
  const [aboutStore, setAboutStore] = useRecoilState(dukanStore);
  const [storeData, setStoreData] = useRecoilState(productsListingStore);

  useEffect(() => {
    axios.get("http://localhost:5173/user.json").then((res) => {
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get(url).then((res) => {
      const storeName = res.data.storeName;
      const products = res.data.products;

      const updatedAboutStore = {
        ...aboutStore,
        storeName,
      };
      setAboutStore(updatedAboutStore);

      localStorage.setItem("dukan-info", JSON.stringify(updatedAboutStore));

      setStoreData({
        ...storeData,
        products,
      });

      localStorage.setItem("homepage-products", JSON.stringify(products));

      console.log(storeName, products);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1>{aboutStore.storeName}</h1>

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
