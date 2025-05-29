import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import ProductGrid from "../../components/Navbar/Products/ProductGrid.component";
import Loader from "../../components/Loader/Loader.component";

export default function HomePage() {
  const url = "https://dummyjson.com/products";

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  console.log(products);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data.products);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>

      <div>{loading && <Loader />}</div>
      <ProductGrid products={products} />
    </div>
  );
}
