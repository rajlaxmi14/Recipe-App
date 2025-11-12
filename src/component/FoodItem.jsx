import styles from "./FoodItem.module.css";
export default function FoodItem({ foodItem }) {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={foodItem.image}></img>
      <h1 className={styles.item}>{foodItem.title}</h1>
      <button className={styles.btn}>View Recipe</button>
    </div>
  );
}
