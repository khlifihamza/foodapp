import { useEffect, useState } from "react";
import styles from "./search.module.css";
import fetchFood from "../api/fetchFoodRoot.js";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(async () => {
    let data = await fetchFood(query);
    console.log( " data = " + data)
    setFoodData(data);
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
