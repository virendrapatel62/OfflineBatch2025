import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Day13GlobalCss.css";

const url = "https://fakestoreapi.com/products";

const fetchPhotos = async () => {
  const res = await axios.get(url);
  return res.data;
};

export default function Day13GlobalCss() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos().then((data) => {
      setPhotos(data);
    });
  }, []);

  return (
    <div>
      <h1>Day 13</h1>

      <table className="products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Thumbnail</th>
          </tr>
        </thead>
        <tbody>
          {photos.map((photo) => (
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
  );
}
