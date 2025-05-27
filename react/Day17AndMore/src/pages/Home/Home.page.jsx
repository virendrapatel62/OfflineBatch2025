import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import ProductGrid from "../../components/Navbar/Products/ProductGrid.component";

export default function HomePage() {
  const url = "https://dummyjson.com/products";

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  return (
    <div>
      <h1>Trending Products</h1>

      <ProductGrid products={products} />
    </div>
  );
}
