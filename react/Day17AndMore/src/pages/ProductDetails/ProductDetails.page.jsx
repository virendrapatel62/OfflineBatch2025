import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader.component";
import { Link } from "react-router";

export default function ProductDetailsPage() {
  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setProduct(null);
    axios.get(`https://fakestoreapi.com/products/${productId}`).then((res) => {
      console.log(res.data);
      setProduct(res.data);
      setLoading(false);
    });
  }, [productId]);

  return (
    <div>
      {loading && <Loader />}

      {product && (
        <div>
          <img
            src={product.image}
            width={200}
            height={200}
            alt={product.title}
          />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      )}

      <Link to="/product/10">Related product</Link>
    </div>
  );
}
