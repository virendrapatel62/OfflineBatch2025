import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Urls } from "../../constants/urls";
import styles from "./product-details.module.css";
import ProductListingComponent from "../../components/product-listing/product-listing.component";
import { placeholderImage } from "../../constants/images";
import Image from "../../components/image/image";
import { Link } from "react-router-dom";

export default function ProductDetailsPage() {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  const [data, setData] = useState({
    isLoading: false,
    error: null,
    product: null,
  });

  function onQuantityChange(value) {
    if (value < 1) {
      setQuantity(1);
    } else {
      setQuantity(value);
    }
  }

  useEffect(() => {
    setData({ isLoading: true, error: null, product: null });

    axios
      .get(Urls.productDetails(id))
      .then((response) => {
        setData({ isLoading: false, error: null, product: response.data.data });
      })
      .catch((error) => {
        setData({ isLoading: false, error: error, product: null });
      });
  }, [id]);

  if (data.isLoading) return <div className={styles.loader}>Loading...</div>;

  if (data.error)
    return <div className={styles.status}>Error: {data.error.message}</div>;

  if (!data.product)
    return <div className={styles.status}>Product not found</div>;

  const { name, description, price, discount, images, unit, category } =
    data.product;

  const sellPrice = discount ? price - (price * discount) / 100 : price;

  return (
    <div className={styles.page}>
      <div className={styles.productDetails}>
        <div className={styles.imageWrapper}>
          <Image src={images?.[0]} alt={name} className={styles.image} />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{name}</h1>
          <p className={styles.description}>{description}</p>

          <div className={styles.priceBlock}>
            <span className={styles.sellPrice}>₹{sellPrice}</span>
            {discount > 0 && (
              <>
                <span className={styles.originalPrice}>₹{price}</span>
                <span className={styles.discount}>{discount}% off</span>
              </>
            )}
          </div>

          <p className={styles.meta}>
            <strong>Unit:</strong> {unit}
          </p>
          <p className={styles.meta}>
            <strong>Category:</strong> {category}
          </p>

          <div className="flex gap-2 mt-4 items-center ">
            <button
              className="bg-slate-700 cursor-pointer text-slate-200 rounded-md p-2 w-20"
              onClick={() => onQuantityChange(quantity - 1)}
            >
              -
            </button>
            <div className="text-2xl font-bold w-10 text-center">
              {quantity}
            </div>

            <button
              className="bg-slate-700 cursor-pointer text-slate-200 rounded-md p-2 w-20"
              onClick={() => onQuantityChange(quantity + 1)}
            >
              +
            </button>
          </div>

          <div hidden>{`/checkout?item=${id}:${quantity}`}</div>

          <div>
            <Link to={`/checkout?item=${id}:${quantity}`}>
              <button className="bg-slate-700 cursor-pointer w-full text-slate-200 rounded-md p-2">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <ProductListingComponent />
    </div>
  );
}
