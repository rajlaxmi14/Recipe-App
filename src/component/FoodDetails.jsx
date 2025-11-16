import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";

// import styles from "./FoodDetails.module.css";
export default function FoodDetails({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  // const API_KEY = "5fdb4cde2e004a9b9f027c16d0685166";
  const API_KEY = "24e56b5286c343cf90b07a4a942941d5";
  const [food, setFood] = useState([]);
  const [isloading, setloading] = useState(true);
  useEffect(() => {
    async function getDetails() {
      let obj = await fetch(`${URL}?apiKey=${API_KEY}`);
      let data = await obj.json();
      console.log(data);
      setloading(false);
      setFood(data);
    }
    getDetails();
  }, [foodId]);
  return (
    <div>
      <div className={styles.card}>
        <h1 className={styles.title}> {food.title}</h1>
        <img className={styles.image} src={food.image} alt="" />
        <div className={styles.metaData}>
          <span>⏱️{food.readyInMinutes}minutes</span>
          <span>{food.vegetarian ? "🥕 Vegetarian" : "🥩 Non Vegetarian"}</span>
        </div>
        <div>
          Price per serving: {Math.round(food.pricePerServing) / 100} 💲
        </div>
        <div className={styles.inst}>
          <h1>Instructions</h1>
          <div>
            <ol>
              {isloading
                ? "Loading..."
                : food.analyzedInstructions[0].steps.map((step) => (
                    <li>{step.step}</li>
                  ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
