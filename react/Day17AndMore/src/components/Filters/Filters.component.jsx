import React from "react";
import styles from "./Filters.module.css";
import { useSearchParams } from "react-router";

export default function Filters(props) {
  const { categories } = props;
  const [searchParams, setSearchParams] = useSearchParams();

  const applyFilter = (category) => {
    console.log(category);

    if (category === "") {
      setSearchParams({});
      return;
    }

    setSearchParams({
      category,
    });
  };

  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <button onClick={() => applyFilter(category)} key={category}>
          {category}
        </button>
      ))}
      <button onClick={() => applyFilter("")}>clear</button>
    </div>
  );
}
