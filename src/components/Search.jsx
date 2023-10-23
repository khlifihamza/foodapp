import { useEffect, useState } from "react";
import styles from "./search.module.css";
import fetchFood from "../api/fetchFoodRoot";

const URL = import.meta.env.VITE_URL;
const API_KEY = import.meta.env.VITE_APIKEY;

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    let data = fetchFood(query);
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
