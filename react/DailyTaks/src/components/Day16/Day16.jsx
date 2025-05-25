import React from "react";

import { BrowserRouter, Link, Route, Routes } from "react-router";
import styles from "./Day16.module.css";

export default function Day16() {
  return (
    <BrowserRouter>
      <h1>Day 16</h1>

      <div className={styles.linkContainer}>
        <Link to="/home">Home</Link>
        <Link to="/about-us">About</Link>
      </div>
      <Routes>
        <Route path="/home" Component={HomePage}></Route>
        <Route path="/about-us" Component={AboutUsPage}></Route>
      </Routes>
    </BrowserRouter>
  );
}

function AboutUsPage() {
  return (
    <div>
      <h1>About Us page</h1>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos,
        assumenda necessitatibus impedit maxime sunt expedita, temporibus minima
        voluptates vitae magnam sapiente voluptatem repellendus nulla vel
        dolores fugiat optio est asperiores!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In temporibus
        asperiores odio eum esse vitae totam, vel dolorem labore cumque ducimus
        neque, ipsa beatae animi nobis illum impedit eos pariatur!
      </p>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <h1>Home page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi eveniet,
        molestiae animi mollitia cupiditate libero quae voluptate aliquam
        officiis et, dolores facere reprehenderit corrupti reiciendis unde
        facilis adipisci dolorum. Sunt?
      </p>
    </div>
  );
}
