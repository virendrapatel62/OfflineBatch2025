import React from "react";
import { BrowserRouter, useNavigate, useParams } from "react-router";
import { Route, Routes, Link } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const styles = {};

function HomePage() {
  const url = "https://dummyjson.com/products";
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  console.log(products);

  return (
    <div>
      <h1>Home page</h1>
      {products.map((product) => (
        <div onClick={() => handleProductClick(product)} key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <div>
        <h1>LoginPage</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  return (
    <div>
      <h1>ProductDetailsPage</h1>
      {product && (
        <div>
          <img src={product.thumbnail} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      )}
    </div>
  );
}

export default function App1() {
  return (
    <BrowserRouter>
      <navbar className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link to="/" className={styles.navbarLink}>
              Home
            </Link>
          </li>
        </ul>

        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link to="/login" className={styles.navbarLink}>
              Login
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to="/signup" className={styles.navbarLink}>
              Signup
            </Link>
          </li>
        </ul>
      </navbar>
      <main>
        <div>
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}
