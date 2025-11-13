import { useEffect, useState } from "react";

// import styles from "./FoodDetails.module.css";
export default function FoodDetails({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "5fdb4cde2e004a9b9f027c16d0685166";
  const [food, setFood] = useState([]);
  useEffect(() => {
    async function getDetails() {
      let obj = await fetch(`${URL}?apiKey=${API_KEY}`);
      let data = await obj.json();
      console.log(data);
      setFood(data);
    }
    getDetails();
  }, [foodId]);
  return (
    <div>
      Food Details{foodId}
      <img src={food.image} alt="" />
    </div>
  );
}
