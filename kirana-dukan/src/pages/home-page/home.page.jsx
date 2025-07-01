import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import ProductListingComponent from "../../components/product-listing/product-listing.component";
import { authStore } from "../../stores/auth.store";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <div className="container mx-auto">
      <div className="py-4 border-b border-gray-200 mb-4">
        <h1 className="text-4xl font-bold">Dukan</h1>
      </div>

      <ProductListingComponent />
    </div>
  );
}
