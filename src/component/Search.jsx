import { useEffect, useState } from "react";
import styles from "./Search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "5fdb4cde2e004a9b9f027c16d0685166";
export default function Search({ foodData, setFoodData }) {
  const [query, updateQuery] = useState("pizza");
  useEffect(() => {
    function makeCall() {
      //   const value = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      //   const data = await value.json();
      //   console.log(data);
      //using promise
      fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
        .then((data) => {
          console.log(data);

          return data.json();
        })
        .then((data) => {
          console.log(data);
          setFoodData(data.results);
        });
    }
    makeCall();
  }, [query]);
  return (
    <div className={styles.holder}>
      <input
        className={styles.search}
        type="text"
        value={query}
        onChange={(e) => updateQuery(e.target.value)}
      />
    </div>
  );
}
