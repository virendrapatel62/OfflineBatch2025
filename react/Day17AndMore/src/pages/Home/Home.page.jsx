import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import ProductGrid from "../../components/Navbar/Products/ProductGrid.component";
import Loader from "../../components/Loader/Loader.component";
import Filters from "../../components/Filters/Filters.component";
import { useSearchParams } from "react-router";
export default function HomePage() {
  const url = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (category) {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }

    if (!category) {
      setFilteredProducts(products);
    }
  }, [category]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);

        const categories = Array.from(
          new Set(res.data?.map((product) => product.category))
        );

        setCategories(categories);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>

      <hr />

      <Filters categories={categories} />

      <hr />

      <div>{loading && <Loader />}</div>
      <ProductGrid products={filteredProducts} />
    </div>
  );
}
