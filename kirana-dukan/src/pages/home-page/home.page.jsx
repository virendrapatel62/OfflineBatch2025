import React, { useEffect } from "react";
import styles from "./home.module.css";
import axios from "axios";
import { productsListingStore } from "../../stores/products-listing.store";
import { dukanStore } from "../../stores/dukan.store";
import { useRecoilState } from "recoil";

const url =
  "https://raw.githubusercontent.com/virendrapatel62/OfflineBatch2025/refs/heads/main/data/products.json";
export default function HomePage() {
  const [aboutStore, setAboutStore] = useRecoilState(dukanStore);

  const [storeData, setStoreData] = useRecoilState(productsListingStore);

  useEffect(() => {
    axios.get(url).then((res) => {
      const storeName = res.data.storeName;
      const products = res.data.products;

      setAboutStore({
        ...aboutStore,
        storeName,
      });

      setStoreData({
        ...storeData,
        products,
      });

      console.log(storeName, products);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1>Kshitij Kirana Store</h1>
    </div>
  );
}
