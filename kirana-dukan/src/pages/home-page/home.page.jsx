import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import ProductListingComponent from "../../components/product-listing/product-listing.component";
import { authStore } from "../../stores/auth.store";
import styles from "./home.module.css";

export default function HomePage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useRecoilValue(authStore);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dukan</h1>
      <ProductListingComponent />
    </div>
  );
}
