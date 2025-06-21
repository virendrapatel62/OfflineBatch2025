import React from "react";
import styles from "./styles.module.css";
import { productsListingStore } from "../../stores/products-listing.store";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import axios from "axios";
import { Urls } from "../../constants/urls";
import { Link } from "react-router-dom";
import { shuffle } from "lodash";

export default function ProductListingComponent(props) {
  const [storeData, setStoreData] = useRecoilState(productsListingStore);

  useEffect(() => {
    axios
      .get(Urls.products)
      .then((response) => {
        console.log(response.data);
        setStoreData({
          ...storeData,
          products: shuffle(response.data.data),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.products} ${props.productListingClassName}`}>
        {storeData.products?.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className={`${styles.product} ${props.productClassName}`}
          >
            <img src={product.images[0]} alt={product.name} />

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
