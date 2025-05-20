import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./PaginationDemo.module.css";

const url = "https://fakestoreapi.com/products";

const fetchPhotos = async () => {
  const res = await axios.get(url);
  return res.data;
};

export default function PaginationDemo() {
  const [products, setProducts] = useState([]);
  const [onScreenProducts, setOnScreenProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const totalCount = products.length;
  const pageSize = 5;
  const totalPages = Math.ceil(totalCount / pageSize);

  console.log({ totalCount });
  console.log({ products, onScreenProducts });

  function updateOnScreenData(data, pageNumber) {
    setOnScreenProducts(
      data.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
    );
  }

  useEffect(() => {
    updateOnScreenData(products, pageNumber);
  }, [pageNumber]);

  const onPageChange = (pageNumber) => {
    if (pageNumber < 1) return;
    if (pageNumber > totalPages) return;

    setPageNumber(pageNumber);
  };

  useEffect(() => {
    fetchPhotos().then((data) => {
      setProducts(data);
      updateOnScreenData(data, pageNumber);
    });
  }, []);

  return (
    <div>
      <h1>Day 13</h1>

      <div className={styles.tableContainer}>
        <table className={styles.productsTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Thumbnail</th>
            </tr>
          </thead>
          <tbody>
            {onScreenProducts.map((photo) => (
              <tr>
                <td>{photo.id}</td>
                <td>{photo.title}</td>
                <td>
                  <img src={photo.image} alt={photo.title} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        <button
          disabled={pageNumber == 1}
          onClick={() => onPageChange(pageNumber - 1)}
        >
          {"<"}
        </button>
        {Array(totalPages)
          .fill(0)
          .map((_, index) => {
            return (
              <button onClick={() => onPageChange(index + 1)} key={index}>
                {index + 1}
              </button>
            );
          })}
        <button
          disabled={pageNumber == totalPages}
          onClick={() => onPageChange(pageNumber + 1)}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
